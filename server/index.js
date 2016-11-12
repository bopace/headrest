'use strict';

const cors = require('cors');
const express = require('express');
const fs = require('fs');

const constants = require('../constants');

let _currentStreak = 1;
let _loggedIn = false;
let _habits = {};
let _answeredQuiz = false;
let _quizAnswers = {};
const getState = () => { return {
	currentStreak: _currentStreak,
	loggedIn: _loggedIn,
	habits: _habits,
	answeredQuiz: _answeredQuiz,
	quizAnswers: _quizAnswers,
}; };

const app = express();
app.set('views', './server/templates');
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static('server/public'));
app.get('/', (req, res) => res.render('index', getState()));
app.post('/habit/add', (req, res) => {
	if (req.params.habit in _habits) {
		console.log("Error: habit already exists");
	} else {
		_habits[req.params.habit] = 0;
	}
	res.redirect('/');
});

app.listen(3000, () => {
	console.log('State server ready on http://localhost:3000');
});
