// This wire spec exports a fake game API that can be used for testing.
// The fake api simulates the monty-hall problem, including the correct
// chance of winning.
module.exports = {
	// Create an instance of the fake game API and export it
	$exports: { create: 'app/game/fakeApi' }
};
