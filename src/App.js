import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link
} from "react-router-dom";

import './App.css';
import Todos from './Todos.js';
import Login from './Login.js';
import SignUp from './SignUp.js'



export default class App extends Component {
  state = { token: localStorage.getItem('TOKEN') }

  handleToken
  
  
  render() {
    return (
            <div>
                <Router>
                  <ul>
                    <li>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup"><p>Sign Up</p></Link>
                    <Link to="/todos">To-do List</Link> 
                    </li>

                  </ul>
                    <Switch>
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <Login {...routerProps} />} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => <SignUp {...routerProps} />} 
                        />
                        <Route 
                            path="/todos" 
                            render={(routerProps) => <Todos {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
    )
  }
}
