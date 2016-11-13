import React from 'react';
import Tappable from 'react-tappable';

import '../css/answer.css';

const Answer = React.createClass({
    displayName: 'Answer',
    getInitialState() {
        return {
            answer: this.props.answers,
        };
    },
    render: function() {
        return (
            <div className="answer">
                {this.state.answer}
            </div>
        );
    }
});

module.exports = Answer;