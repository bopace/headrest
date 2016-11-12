import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import HabitStore from './stores/habit';

import Home from './components/Home';
import Habit from './components/Habit';

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
	render () {
		return (
			<div>
				<Home />
			</div>
		);
	},
});

ReactDOM.render(<App />, document.getElementById('app'));
