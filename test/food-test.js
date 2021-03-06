const chai     = require('chai');
const assert   = chai.assert;
const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;
const Food     = require('../lib/food').Food;


describe('Food', function () {
    it('exists', function () {
        let board = new Board(60, 60);
        assert(new Food(board));
    });

    it('has a location', function () {
        let board = new Board(60, 60);
        let food = new Food(board);
        assert(food.x);
        assert(food.y);
    });

    it('instantiates at a random location', function () {
        let board = new Board(60, 60);
        let food1 = new Food(board);
        let food2 = new Food(board);
        assert.notDeepEqual(food1, food2);
    });

    it('instantiates on the board', function () {
        let board = new Board(60, 60);
        let food = new Food(board);
        assert.deepEqual(board.food[0], food);
    });
});
