import React, { Component } from 'react'
import './App.css';
import Todos from './Todos.js'
export default class App extends Component {
  render() {
    return (
      <div>
         Hello!
         <Todos />
      </div>
    )
  }
}
