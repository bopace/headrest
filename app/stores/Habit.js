'use strict';

const Store = require('store-prototype');
const xhr = require('xhr');
const constants = require('../../constants');

const HabitStore = new Store();

let _userHabits = [];
let _currentStreak = 1;
let _loggedIn = false;

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
            callback(null, {currentStreak, loggedIn});
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
        };
    }
})

//HabitStore.update();

module.exports = HabitStore;