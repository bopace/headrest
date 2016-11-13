import React from 'react';
import Tappable from 'react-tappable';

import Habit from './Habit';
import Quiz from './Quiz';

import '../css/mypage.css';

import HabitStore from '../stores/habit';

const MyPage = React.createClass({
    displayName: 'MyPage',
    getInitialState() {
        return {
            currentStreak: this.props.currentStreak,
            habits: this.props.habits,
        };
    },
    buildPage() {
        if (this.props.answeredQuiz) {
            return (
                <h1>Quiz done</h1>
            );
        } else {
            return (
                <Tappable className="quiz-button">
                    Take Quiz to Begin
                </Tappable>
            );
        }
    },
    buildHabits() {
        const habits = this.state.habits;
        let habitComponents = [];
        for (let i = 0; i < habits.length; i++) {
            let habit = <Habit habitName={habits[i].name} habitStreak={habits[i].streak} />
            habitComponents.push(habit);
        }
        return habitComponents;
    },
    render: function() {
        return (
            <div className="mypage">
                <h1>Welcome, Bo!</h1>
                <h2>Current streak: {this.state.currentStreak}</h2>
                <Tappable className="quiz-button">
                    Retake Quiz
                </Tappable>
                <div className="habitWrapper">
                    <h2>My Habits</h2>
                    <hr/>
                    {this.buildHabits()}
                </div>
            </div>
        );
    }
});

module.exports = MyPage;