'use strict';

const Store = require('store-prototype');
const xhr = require('xhr');
const constants = require('../../constants');

const HabitStore = new Store();

let _userHabits = [];
let _currentStreak = 1;

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
            callback(null, currentStreak);
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
        };
    }
})

//HabitStore.update();

module.exports = HabitStore;