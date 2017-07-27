import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './ui/pages/Home/Home'
import SignUp from './ui/pages/SignUp/SignUp'
import Login from './ui/pages/Login/Login'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login'component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
