import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import  {Provider} from 'react-redux'
import store from './redux/store'
import Home from './ui/pages/Home/Home'
import SignUp from './ui/pages/SignUp/SignUp'
import Login from './ui/pages/Login/Login'
import setting from './setting'
import axios from 'axios'
import Sidebar from './ui/Shared/Sidebar/Sidebar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/signup' component={SignUp} />
              <Route path='/login'component={Login} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
