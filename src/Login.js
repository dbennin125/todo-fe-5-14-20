import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: '',
        Password: ''
    }
    
    handSubmit = (e) => {
        e.preventDefault();

        const token = Math.random();
        //creates a fake token, the real one comes from the backend
        console.log(token, this.state.email, this.state.password)
        this.props.handleTokenChange(token);
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
                  <button>Log in</button>
              </form>
          </div>
      )
  }
}
