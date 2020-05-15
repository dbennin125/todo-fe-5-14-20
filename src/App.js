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
import SignUp from './SignUp.js';
import PrivateRoute from './PrivateRoute.js';



export default class App extends Component {
  state = { token: localStorage.getItem('TOKEN') }

  handleTokenChange = (myToken) => {
    this.setState({ token: myToken });
    localStorage.setItem('TOKEN', myToken)
  }
  
  
  render() {
    console.log(this.state.token);
    return (
            <div>
                <Router>
                  <ul>
                    <li>

                    <Link to="/login">Log In</Link>
                    <Link to="/signup"><p>Sign Up</p></Link>
                    {
                      this.state.token && <Link to="/todos">To-do List</Link>}
                
                    <p><button onClick={() => this.handleTokenChange('')}>Goodbye</button></p>
                     
                    </li>

                  </ul>
                    <Switch>
                        <Route 
                            exact
                            path="/login" 
                            render={(routerProps) => <Login handleTokenChange={this.handleTokenChange} {...routerProps} />} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => <SignUp handleTokenChange={this.handleTokenChange} {...routerProps} />} 
                        />
                        <PrivateRoute 
                            path="/todos" token={this.state.token}
                            render={(routerProps) => <Todos  {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
    )
  }
}
