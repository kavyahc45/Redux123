import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import PostForm from './Components/PostForm';
import ALLPost from './Components/ALLPost';

function App() {
  return (
    <div className="App">
      
      <Router>
<switch>
<Route exact path='/' component={Login}></Route>  
 <Route exact path='/Register' component={Register}></Route> 
<Route exact path= '/postform' component={PostForm}></Route>
 <Route exact path ='/allpost' component={ALLPost}></Route>

</switch>
  </Router> 
    </div>
  );
}

export default App;
