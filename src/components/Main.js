import React from 'react';
import About from './About.js';
import Contact from './Contact.js';
import Home from './Home.js';
import { Switch, Route} from 'react-router-dom';

const Main = () => (
	<Switch>
		<Route exact path="home/" component={Home} />
		<Route  path="/about" component={About} />
		<Route  path="/contact" component={Contact} />
	
	</Switch>
	)
	

export default Main;

