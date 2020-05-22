import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Link } from 'react-router-dom'
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute';
import ColorList from './components/ColorList'

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>

<ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Bubbles Page</Link>
        </li>
      </ul>
      
      <div className="App">
      <Switch>
          <PrivateRoute exact path='/' component={BubblePage} />
        <Route exact path="/login" component={Login} />
      </Switch>
        
      </div>
    </Router>
  );
}

export default App;
