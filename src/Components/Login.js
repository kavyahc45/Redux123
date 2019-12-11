import React, { Component } from 'react';
import './Login.css';



class Login extends Component {
    render() {
        return (
            <div>
                <h2>Login</h2>
                <br></br>
                <h3>Username: <input type="text" name='Username'></input>
                <br></br><br></br>
                Password:<input type="text" name='Password'></input>
                <br></br><br></br>
                <button class="login">Login</button>
                <button class="regstor">Registor</button></h3>
                
            </div>
        );
    }
}

export default Login;