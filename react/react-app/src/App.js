import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import LogIn from './components/LogIn';
import Home from './components/Home';
import SeeAllUsers, { demo1 } from './components/SeeAllUser';
import UserSection from './components/UserSection';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      
      <Router>
   
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/components/LogIn" component={LogIn} />
            <Route exact path="/components/Register" component={Register} />
            <Route exact path="/components/SeeAllUsers" component={SeeAllUsers} />
            <Route exact path="/components/UserSection" component={UserSection} />
          </Switch>

       
      </Router>
    );
  }
}

export default App;
