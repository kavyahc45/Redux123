import React, { Component } from 'react';
import BrowserHistory from "./Utils/BrowserHestory";

class Login extends Component {

  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        alert("Form submitted");
    }

  }
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }
    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }
    onHandleClick(){
    BrowserHistory.push("/Register");
    }
    render() {
    return (
    <div>
    <h1>Login </h1>
    <form onSubmit={this.handleSubmit}>
    <div>
    <label>UserName :</label>
    <input name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} id="user"/>
    <div className="error" > {this.state.nameError}</div><br></br>
    </div>
    <div>
    <label>Password :</label>
    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} id="password"/>
    <div className="error">{this.state.passwordError}</div><br></br>
    </div>
    <div><button type="submit">Login</button></div> 
    </form>
    <div ><button onClick={this.onHandleClick} className="button">Register</button></div>
    </div>
    );

    }

    }
            
     
export default Login;

// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {handleChange,registor} from '../Action/LoginAction';
// import './Login.css';



// class Login extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Login</h2>
//                 <br></br>
//                 <h3>Username: <input type="text" name='Username'  onChange={this.props.handleChange}></input>
//                 <br></br><br></br>
//                 Password:<input type="text" name='Password'  onChange={this.props.handleChange}></input>
//                 <br></br><br></br>
//                 <button class="login">Login</button>
//                 <button class="regstor">Registor</button></h3>
//         <span>{this.props.username}</span>
//     <span>{this.props.operation}</span>
//     <span>{this.props.password}</span>
        
//         <span>{this.props.msg}</span>
//             </div>
//         );
//     }
// }
// const mapStoreToProps=(state)=>{
//     const{username,password,msg,operation,}=state.LoginReducer;
//     return {username,password,msg,operation};
//     }

// export default  connect(mapStoreToProps,{handleChange,registor}) (Login);