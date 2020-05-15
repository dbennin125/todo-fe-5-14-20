import React, { Component } from 'react'


export default class SignUp extends Component {
    state = {
        email: '',
        password: ''
    }
    

    handSubmit = (e) => {
        e.preventDefault();

        const token = Math.random();
        //creates a fake token, the real one comes from the backend
        // console.log(token, this.state.email, this.state.password)
        this.props.handleTokenChange(token);
        //handleTokenChange is in App.js this will bring it to App.js
        this.props.history.push('/todos');
        //pushes user to todos list
    }
    
    render() {
    //    console.log(this.state.email)//email state responds with new way
    // console.log(this.state.password)
        return (
            <div>
              <form onSubmit={this.handSubmit}>
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
