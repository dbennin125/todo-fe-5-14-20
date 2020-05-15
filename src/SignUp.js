import React, { Component } from 'react'
import request from 'superagent';


export default class SignUp extends Component {
    state = {
        email: '',
        password: ''
    }
    

    handSubmit = async (e)  => {
        e.preventDefault();
        const newUser = await request.post(`http://localhost:3000/auth/signup`,{
            email: this.state.email,
            password: this.state.password})
        
        //creates a fake token, the real one comes from the backend
        localStorage.setItem('TOKEN', newUser.body.token)
        // handleTokenChange is in App.js this will bring it to App.js
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
