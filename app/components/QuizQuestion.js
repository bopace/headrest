import React from 'react';
import Tappable from 'react-tappable';

import '../css/quizquestion.css';

import Answer from './Answer';

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
                let answer = <Answer answer={this.props.answers[i]} />;
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