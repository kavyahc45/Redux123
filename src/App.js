import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
// import Users from './Components/Users';
// import Registor from './Components/Register';
// import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Registor/> */}
      {/* <Users/> */}
      <Router>
<switch>
<Route exact path='/' component={Login}></Route> 
<Route exact path='/Register' component={Register}></Route> 
{/* <Route exact path='/app' component={Users}></Route>  */}
</switch>
</Router>
    </div>
  );
}

export default App;
