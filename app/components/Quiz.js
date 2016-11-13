import React from 'react';
import Tappable from 'react-tappable';

import '../css/quiz.css';

import QuizQuestion from './QuizQuestion';

import HabitStore from '../stores/habit';

const Quiz = React.createClass({
    displayName: 'Quiz',
    getInitialState() {
        return {
            quizQuestions: this.props.quizQuestions,
        };
    },
    buildQuiz() {
        let questions = [];
        for (var i = 0; i < this.state.quizQuestions.length; i++) {
            let question = <QuizQuestion question={this.state.quizQuestions[i].question} answers={this.state.quizQuestions[i].answers} />
            questions.push(question);
        }
        return questions;
    },
    render: function() {
        return (
            <div className="quiz">
                {this.buildQuiz()}
            </div>
        );
    }
});

module.exports = Quiz;