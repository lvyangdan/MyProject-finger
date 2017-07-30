import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import  {Provider} from 'react-redux'
import store from './redux/store'
import Home from './ui/pages/Home/Home'
import SignUp from './ui/pages/SignUp/SignUp'
import Login from './ui/pages/Login/Login'
import Sidebar from './ui/Shared/Sidebar/Sidebar'
import Dashboard from './ui/pages/Dashboard/Dashboard'
import Dish from './ui/pages/Dish/Dish'
import Cart from './ui/pages/Cart/Cart'
import Profile from './ui/pages/Profile/Profile'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/signup' component={SignUp} />
                <Route path='/login'component={Login} />
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/dish' component={Dish}/>
                <Route path='/cart' component={Cart}/>
              </Switch>
          </Router>
      </Provider>
    );
  }
}

export default App;
