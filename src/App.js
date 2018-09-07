import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import Dashboard from './components/pages/Dashboard';
import {connect} from "react-redux";

class App extends React.Component {

	render(){
		const { isAuthenticated } = this.props;
		console.log(isAuthenticated);
		return (
			<div>
				{ isAuthenticated ? <Dashboard />: '' }
				<Route path='/' exact component={HomePage} />
		    	<Route path='/login' exact component={LoginPage} />
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    };
}

export default connect(mapStateToProps, {})(App);