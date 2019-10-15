import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Users from './components/users/User'
import Navbar from './components/partials/Navbar'
import Usersitems from './components/users/Useritems'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/users"  component={Users} />
          <Route exact path="/users/:login"  component={Usersitems} />
          <Route exact component={Users} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
