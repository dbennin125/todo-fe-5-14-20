import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: '',
        Password: ''
    }
    
    handSubmit = (e) => {
        e.preventDefault();

        const token = Math.floor(Math.random());
        // console.log(token, this.state.email, this.state.password) //works
        this.props.
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
                  <button>Submit</button>
              </form>
          </div>
      )
  }
}
