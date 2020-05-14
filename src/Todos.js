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
    ]

}    
    
    
    render() {
        return (
            <div className="App">
               <ul>
                {
                this.state.todos.map(item => <li className={ item.is_completed ? 'completed' : 'incomplete'} key={item.task}>
                    <h4>Task: {item.task}<p>Importance: {item.importance}</p></h4>
                </li>)
                }
                </ul> 
            </div>  
        )
    }
}
