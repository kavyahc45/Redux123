import React, { Component } from 'react';

class Users extends Component {
    render() {
        return (
            <div>
                <h2>React Application</h2><br></br><br></br>
              
                <h3>Add User</h3><br></br>
                Name : <input type="text" name='Name'></input><br></br><br></br>
                User Name :<input type="text" name='Name'></input><br></br>
                <button class="Add">Add New User</button>
                
               
                <h3>View_User</h3>
                <input type="text" name='Name' placeholder='Name'></input>
                <input type="text" name='name'></input>
                <input type="text" type='Name' placeholder='User Name'></input>
                <input type="text" name='name'></input>
                <input type="text" name='Name' placeholder='Action'></input>
                <button>Delete</button>
                <button>Edit</button>                

            </div>
        );
    }
}

export default Users;