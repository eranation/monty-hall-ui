	var clicks, dom3, touch, integration;

	// Load clicks library modules (User interaction capture)
	clicks = require('clicks');
	dom3 = require('clicks/events/dom3');
	touch = require('clicks/events/touch');

	// Load the integration library modules (Enterprise Integration Patterns in JS)
	integration = require('integration');
	require('integration/aggregators/batching');
	require('integration/channels/pubsub');

	/**
	 * Creates an object that will configure the clicks library to capture user
	 * interactions (clicks, mouseovers, etc.), and send them, via the
	 * Integration library, to the server for analysis.  This could be used
	 * to analyze user behavior, for example.
	 * @return {Object} object with two methods: start() and stop(), that, as
	 * you might expect, start and stop collection of user interactions.
	 */
	module.exports = function () {
		var bus;

		return {
			start: function (client) {
				this.stop();

				bus = integration.bus();

				clicks.stream(bus.inboundAdapter('stream'));
				bus.pubsub('stream');
				bus.batchingAggregator('batcher', { batch: 500, timeout: 5e3, input: 'stream', output: 'chunkedStream' });
				bus.pubsub('chunkedStream');
				bus.subscribe('chunkedStream', bus.outboundAdapter(function (chunk) {
					client({
						method: 'post',
						entity: { data: JSON.stringify(chunk) }
					});
				}));

				clicks.attach(touch.types).attach(dom3.types);
			},
			stop: function () {
				clicks.detach();
				if (bus && bus.destroy) {
					bus.destroy();
				}
			}
		};
	};
