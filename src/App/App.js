import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact render={()=> <h1>Home Page</h1>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
