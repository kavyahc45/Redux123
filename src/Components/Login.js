import React, { Component } from 'react';
import BrowserHistory from "./Utils/BrowserHistory";

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
    
        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email-ID.";
        }
    
        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID.";
          }
        }
    
        if (!fields["mobileno"]) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter your mobile no.";
        }
    
        if (typeof fields["mobileno"] !== "undefined") {
          if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter valid mobile no.";
          }
        }
    
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
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
            <div id="main-registration-container">
            <div id="register">
               <h3>Registration page</h3>
               <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
               <label>Name</label>
               <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
               <div className="errorMsg">{this.state.errors.username}</div>
               <label>Password</label>
               <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
               <div className="errorMsg">{this.state.errors.password}</div>
               <input type="submit" className="button"  value="Register"/>
               </form>
           </div>
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