import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/index';
import About from './components/About';
import Resume from './components/Resume';

function App() {


  return (
    <div id="body">
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} exact />
          <Route path='/resume' component={Resume} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
