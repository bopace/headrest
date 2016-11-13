import React from 'react';
import Tappable from 'react-tappable';

import '../css/quizquestion.css';

const QuizQuestion = React.createClass({
    displayName: 'QuizQuestion',
    getInitialState() {
        return {
            question: this.props.question,
            answers: this.props.answers,
        };
    },
    buildAnswers() {
        let answers = [];
        for (var i = 0; i < answers.length; i++) {
                let answer = <div className="answer">{this.props.answers[i]}</div>
                answers.push(answer);
        }
        return answers;
    },
    render: function() {
        return (
            <div className="quizQuestion">
                <div className="question">
                    {this.state.question}
                </div>
                <div className="answers">
                    {this.buildAnswers()}
                </div>
            </div>
        );
    }
});

module.exports = QuizQuestion;