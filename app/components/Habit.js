import classnames from 'classnames';
import React from 'react';
import Tappable from 'react-tappable';

import '../css/habit.css';

import HabitStore from '../stores/habit';

const Habit = React.createClass({
    displayName: 'Habit',
    render: function() {
        return (
            <div className='habit'>
                <h1>This is a habit</h1>
            </div>
        );
    }
});

module.exports = Habit;