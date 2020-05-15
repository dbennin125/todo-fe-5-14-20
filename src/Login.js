import React, { Component } from 'react'
import request from 'superagent';

export default class Login extends Component {
    state = {
        email: '',
        Password: '',
       
    }
    
    handSubmit = async (e)  => {
        e.preventDefault();
        const existingUser = await request.post(`http://localhost:3000/auth/signin`, this.state)
        // const token = { token: existingUser.body };
        //creates a fake token, the real one comes from the backend
        localStorage.setItem('TOKEN', existingUser.body.token)
        // console.log(token, this.state.email, this.state.password)
        
        this.props.handleTokenChange(existingUser.body.token);
        // handleTokenChange is in App.js this will bring it to App.js
        this.props.history.push('/todos');
        //pushes user to todos list
    }

    render() {
       
        return (
            <div>
            <form>
                  <label>
                      Email:
                      <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
                  </label>
                  <label>
                      Password:
                      <input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} />
                  </label>
                  <button>Welcome Back</button>
              </form>
          </div>
      )
  }
}
