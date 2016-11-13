'use strict';

const Store = require('store-prototype');
const constants = require('../..constants');

const QuizStore = new Store();

let _currentQuestion = 0;
let _totalQuestions = constants.TOTAL_QUESTIONS;
let _questions = constants.QUESTIONS;
let _direction = 'next';

QuizStore.extend({
    getState () {

    },
});

module.exports = QuizStore;