var QuickFind = require('../../src/UnionFind/quick_find');
var assert = require('assert');


describe('Quick Find', function () {

	it('should find connected points', function () {
		var pixels = new QuickFind(10);
		assert.equal(pixels.isConnected(4, 4), true);
		assert.equal(pixels.isConnected(2, 1), false);
		pixels.union(4, 3);
		pixels.union(3, 8);
		pixels.union(2, 1);
		pixels.union(4, 9);
		pixels.union(5, 6);

		assert.equal(pixels.isConnected(4, 4), true);
		assert.equal(pixels.isConnected(4, 3), true);
		assert.equal(pixels.isConnected(3, 4), true);
		assert.equal(pixels.isConnected(3, 8), true);
		assert.equal(pixels.isConnected(0, 6), false);
		assert.equal(pixels.isConnected(1, 9), false);
	});


});
