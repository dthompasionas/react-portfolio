import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import Home from './components/pages/Home';
import about from './components/pages/about';
import projects from './components/pages/projects';
import resume from './components/pages/resume';
import contact from './components/pages/contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={about} />
          <Route path='/projects' component={projects} />
          <Route path='/resume' component={resume} />
          <Route path='/contact' component={contact} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
