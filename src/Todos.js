import React, { Component } from 'react'




export default class Todos extends Component {
//intialize state and hard data
state = {
    todos: [
    {
        id: 1,
        task: 'walk dog',
        importance: 10,
        is_completed: false,
      },
    {
        id: 2,
        task: 'shopping',
        importance: 4,
        is_completed: true,
      },
      {
        id: 3,
        task: 'get booze',
        importance: 6,
        is_completed: false,
      },
    {
        id: 4,
        task: 'get produce',
        importance: 8,
        is_completed: false,
      },
      {
        id: 5,
        task: 'get juice',
        importance: 8,
        is_completed: true,
      }
    ],
    newTodoName: '',
    newTodoImportance: 0,
}   

handleNameChange =  (e) => {
    this.setState({ newTodoName: e.target.value });
}

handleImportanceChange = (e) => {
    this.setState({ newTodoImportance: e.target.value });
}

getClassName = (item) => {
    if (item.is_completed) return 'completed';
    if (!item.is_completed) return 'incomplete';
}

handSubmit = (e) => {
    e.preventDefault();
    
}
    
    render() {
    //   (console.log(this.state.newTodoName)) //newTodoName state works
    //   (console.log(this.state.newTodoImportance, 'lolol')); //state changes with input from importance
        
      return (
            <div className="App">
                <form onSubmit="">
                  <label name="name">
                      Add Name:<input value={this.state.newTodoName} onChange={this.handleNameChange} />  
                </label>
                <label name="importance">
                    Add Importance Level<input value={this.state.newTodoImportance} onChange={this.handleImportanceChange}/>
                </label>
                <button>Add</button>
                </form>
               <ul>
                {
                this.state.todos.map(item => <li className={this.getClassName(item)} key={item.task}>
                    <h4>Task: {item.task}<p>Importance: {item.importance}</p></h4>
                </li>)
                }
                </ul> 
            </div>  
        )
    }
}
