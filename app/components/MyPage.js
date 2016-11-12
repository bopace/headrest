import React from 'react';
import Tappable from 'react-tappable';

import Habit from './Habit';

import '../css/mypage.css';

import HabitStore from '../stores/habit';

const MyPage = React.createClass({
    displayName: 'MyPage',
    render: function() {
        return (
            <div className="mypage">
                <Habit />
                <Habit />
            </div>
        );
    }
});

module.exports = MyPage;