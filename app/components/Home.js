import React from 'react';
import Tappable from 'react-tappable';

import Habit from './Habit';

import '../css/home.css';

import HabitStore from '../stores/habit';

const Home = React.createClass({
    displayName: 'Home',
    login() {
        this.props.loginAction();
    },
    render: function() {
        return (
            <div className='home'>
                <img src="../../images/logo.png" />
                <h1>Headrest</h1>
                <Tappable className="signup-button">
                    Sign Up
                </Tappable>
                <Tappable className="login-button" onTap={this.login}>
                    Login
                </Tappable>
            </div>
        );
    }
});

module.exports = Home;