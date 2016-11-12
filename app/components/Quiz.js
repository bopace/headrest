import React from 'react';
import Tappable from 'react-tappable';

import '../css/quiz.css';

import HabitStore from '../stores/habit';

const Quiz = React.createClass({
    displayName: 'Quiz',
    render: function() {
        return (
            <h1>This is the quiz.</h1>
        );
    }
});

module.exports = Quiz;