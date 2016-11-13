import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import HabitStore from './stores/habit';

import Home from './components/Home';
import MyPage from './components/MyPage';
import Habit from './components/Habit';

const constants = require('../constants');

const App = React.createClass({
	getInitialState () {
		return HabitStore.getState();
	},
	componentWillMount () {
		HabitStore.addChangeListener(this.updateStateFromStore);
	},
	componentWillUnmount () {
		HabitStore.removeChangeListener(this.updateStateFromStore);
	},
	updateStateFromStore () {
		this.setState(HabitStore.getState());
	},
	loginAction() {
		HabitStore.login();
		this.updateStateFromStore();
	},
	renderCurrentPage() {
		const {currentStreak, loggedIn} = this.state;
		return loggedIn === true
			? <MyPage currentStreak={12} habits={constants.HABITS} />
			: <Home loginAction={this.loginAction} />;
	},
	render () {
		console.log(this.state.loggedIn);
		return (
			<div>
				<CSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
					>
					{this.renderCurrentPage()}
				</CSSTransitionGroup>
			</div>
		);
	},
});

ReactDOM.render(<App />, document.getElementById('app'));
