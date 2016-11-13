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
    render: function() {
        return (
            <div className="quizQuestion">
                <div className="question">
                    {this.state.question}
                </div>
                <div className="answers">
                    {this.state.answers}
                </div>
            </div>
        );
    }
});

module.exports = QuizQuestion;