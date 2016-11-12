'use strict';

const Store = require('store-prototype');
const xhr = require('xhr');
const constants = require('../../constants');

const HabitStore = new Store();

let _currentStreak = 1;
let _loggedIn = false;
let _habits = {};
let _answeredQuiz = false;
let _quizAnswers = {};

const fetchHabitData = (callback) => {
    xhr({
        url: 'http://localhost:3000/habits',
        headers: {
            'Content-Type': 'application/json',
        },
    }, (err, reponse, data) => {
        try {
            data = JSON.parse(data);
            const currentStreak = data.currentStreak || 0;
            const loggedIn = data.loggedIn || false;
            const habits = data.habits || {};
            const answeredQuiz = data.answeredQuiz || false;
            const quizAnswers = data.quizAnswers || {};
            callback(null, {currentStreak, loggedIn, habits, answeredQuiz, quizAnswers});
        } catch(e) {
            console.error('Error: unable to load status data from the API', err, response);
            callback(err);
        }
    });
}

HabitStore.extend({
    getState() {
        return {
            currentStreak: _currentStreak,
            loggedIn: _loggedIn,
            habits: _habits,
            answeredQuiz: _answeredQuiz,
            quizAnswers: _quizAnswers,
        };
    },
    login() {
        _loggedIn = true;
        xhr({
            url: 'http://localhost:3000/login',
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
        }, (err, response, data) => {
            
        });
    }
})

//HabitStore.update();

module.exports = HabitStore;