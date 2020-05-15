import React, { Component } from 'react'
import request from 'superagent'
// import App from './App.js'




export default class Todos extends Component {
//intialize state and hard data
state = {
    todos: [
    // {
    //     id: 1,
    //     task: 'walk dog',
    //     importance: 10,
    //     is_completed: false,
    //   },
    // {
    //     id: 2,
    //     task: 'shopping',
    //     importance: 4,
    //     is_completed: true,
    //   },
    //   {
    //     id: 3,
    //     task: 'get booze',
    //     importance: 6,
    //     is_completed: false,
    //   },
    // {
    //     id: 4,
    //     task: 'get produce',
    //     importance: 8,
    //     is_completed: false,
    //   },
    //   {
    //     id: 5,
    //     task: 'get juice',
    //     importance: 8,
    //     is_completed: true,
    //   }
    ],
    newTodoName: '',
    newTodoImportance: 0,
    token: localStorage.getItem('TOKEN')
    
}   
// console.log(this.state.token)
componentDidMount = async () => {
    const userList = await request.get(`http://localhost:3000/api/todos`).set('Authorization', this.state.token || localStorage.getItem('TOKEN'))
    this.setState({ todos: userList.body })
}
// componentDidMount() {
//     console.log(this.state.token)
// }
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
    const newArrayOfTodos = this.state.todos.slice();
    const fakeNewTodo= {
        id: Math.floor(Math.random()),
        task: this.state.newTodoName,
        importance: this.state.newTodoImportance,
        is_completed: false,
    }
    newArrayOfTodos.push(fakeNewTodo)
    this.setState({
        newTodo: '',
        todos: newArrayOfTodos
    })
}

handClick = async(id) => {
    await request.get(`http://localhost:3000/api/todos/${id}`).set('Authorization', this.state.token || localStorage.getItem('TOKEN'))
    const userList = await request.get(`http://localhost:3000/api/todos`).set('Authorization', this.state.token || localStorage.getItem('TOKEN'))
    const updatedTasks = userList.body
    this.setState({ todos: updatedTasks })
}



    render() {
    //   (console.log(this.state.newTodoName)) //newTodoName state works
    //   (console.log(this.state.newTodoImportance, 'lolol')); //state changes with input from importance
    console.log(this.state.todos)
        
      return (
            <div className="App">
                <form onSubmit={this.handSubmit}>
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
                this.state.todos.map(item => <li onClick={() => this.handClick(item.id)} className={this.getClassName(item)} key={item.task}>
                    <h4>Task: {item.task}<p>Importance: {item.importance}</p></h4>
                </li>)
                }
                </ul> 
            </div>  
        )
    }
}
