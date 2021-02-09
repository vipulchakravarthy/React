import React, { Component } from 'react';

class LoginForm extends Component {

    state = {
        account: {
            username: '',
            password: ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        console.log("submitted")
    }

    handleChange = ({currentTarget: input}) => {
        console.log("called change")
        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({account})
    }
    render() {
        const {account} = this.state 
        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                <input 
                value={account.username} 
                onChange={this.handleChange}
                autoFocus id='username' name="username" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    onChange={this.handleChange}
                    value={account.password} name='password' id='password' type="text" className="form-control"/>
                </div>
                <button className="btn-primary">Login</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;