	var when;

	when = require('when');

	module.exports = {

		/**
		 * Client-side observable data container for doors data
		 * @required
		 */
		doors: null,

		/**
		 * The game API that manages the game and door state
		 * @required
		 */
		gameApi: null,

		selectDoor: function (door) {
			// Can't select already-opened doors
			if(door.status == 'OPENED') {
				return door;
			}

			var result = this._doSelectDoor(door);

			if(this._doSelectDoor !== this._switchOrStay) {
				this._doSelectDoor = this._switchOrStay;
			} else {
				// TODO: Transition to final state
				this._doSelectDoor = noop;
			}

			return result;
		},

		getStatus: function () {
			return this.game && this.game.status;
		},

		_doSelectDoor: function(door) {
			return this._selectInitialDoor(door);
		},

		_selectInitialDoor: function(door) {
			return this.gameApi.selectDoor(door).then(function(selectedDoor) {
				// TODO: this probably isn't the right place for this:
				this.game.status = 'AWAITING_FINAL_SELECTION';

				return this.game.doors
					.then(this._updateDoorsData.bind(this))
					.then(function() {
						return selectedDoor;
					});
			}.bind(this));
		},

		_switchOrStay: function(door) {
			if(door.status == 'OPENED') {
				return;
			}

			var self, game, updateDoorsData;

			self = this;
			game = this.game;
			updateDoorsData = this._updateDoorsData.bind(this);

			return this.gameApi.openDoor(door).then(function(openedDoor) {
				return game.doors
					.then(updateDoorsData)
					.then(function() {
						return game.self;
					})
					.then(function(game) {
						self.game = game;
						return openedDoor;
					});
			});
		},

		_startGame: function() {
			var self, doors;

			self = this;
			doors = this.doors;

			return this.gameApi.createGame()
				.then(function(game) {
					self.game = game;
					return game.doors;
				})
				.then(this._updateDoorsData.bind(this))
				.then(function() {
					return self.game;
				});
		},

		_updateDoorsData: function(doorData) {
			doorData.doors.forEach(this.doors.update);
			return doorData;
		}

	};

	function noop() {}
