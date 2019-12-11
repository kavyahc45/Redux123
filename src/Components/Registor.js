import React, { Component } from 'react';
import './Login.css';

class Registor extends Component {
    render() {
        return (
            <div>
                <h2>Registration</h2><br></br>
               <h3> Firstname:<input type="text" name='Firstname:'></input><br></br><br></br>
               Lastname: <input type="text" name='Lastname:'></input><br></br><br></br>
              Username:  <input type="text" name='Username:'></input><br></br><br></br>
              Password:  <input type="text" name='Password:'></input><br></br><br></br>
                <button class="Registor">Registor</button>
                <button class="cancle">Cancel</button></h3>
            </div>
        );
    }
}

export default Registor;