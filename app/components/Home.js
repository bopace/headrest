import React from 'react';
import Tappable from 'react-tappable';

import Habit from './Habit';

import '../css/home.css';

import HabitStore from '../stores/habit';

const Home = React.createClass({
    displayName: 'Home',
    render: function() {
        return (
            <div className='home'>
                <img src="../../images/logo.png" />
                <h1>Headrest</h1>
                <Tappable className="signup-button">
                    Sign Up
                </Tappable>
                <Tappable className="login-button">
                    Login
                </Tappable>
            </div>
        )
    }
});

module.exports = Home;