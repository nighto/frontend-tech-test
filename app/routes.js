import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tasks from './containers/Tasks';
import About from './components/About';

export default (
	<Switch>
		<Route exact path="/" component={Tasks} />
		<Route path="/about" component={About} />
	</Switch>
);
