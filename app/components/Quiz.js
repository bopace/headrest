import React from 'react';
import Tappable from 'react-tappable';

import '../css/quiz.css';

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
        for (var i = 0; i < quizQuestions.length; i++) {
            let question = <QuizQuestion question={quizQuestions[i].question} answers={quizQuestions[i].answers} />
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