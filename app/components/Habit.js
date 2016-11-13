import classnames from 'classnames';
import React from 'react';
import Tappable from 'react-tappable';

import '../css/habit.css';

import HabitStore from '../stores/habit';

const Habit = React.createClass({
    displayName: 'Habit',
    getInitialState() {
        return {
            habitName: this.props.habitName,
            habitStreak: this.props.habitStreak,
        };
    },
    render: function() {
        return (
            <div className='habit'>
                <div className='habitName'>
                    {this.state.habitName}
                </div>
                <div className='habitStreak'>
                    Habit Streak: {this.state.habitStreak}
                </div>
            </div>
        );
    }
});

module.exports = Habit;