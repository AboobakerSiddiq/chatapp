import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router basename={"/"}>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
