import React from 'react';
import Tappable from 'react-tappable';

import Habit from './Habit';

import '../css/mypage.css';

import HabitStore from '../stores/habit';

const MyPage = React.createClass({
    displayName: 'MyPage',
    buildPage() {
        if (this.props.answeredQuiz) {
            return (
                <h1>Quiz done</h1>
            );
        } else {
            return (
                <Quiz />
            );
        }
    },
    render: function() {
        return (
            <div className="mypage">
                <h1>Welcome, Bo!</h1>
                {this.buildPage()}
            </div>
        );
    }
});

module.exports = MyPage;