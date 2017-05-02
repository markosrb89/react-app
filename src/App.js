import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Forms from './components/Forms';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <div className="App-header">
            <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to='/'>React app</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to='/'>Home</Link></li>
                            <li><Link to='/Forms'>Forms</Link></li>
                            <li><Link to='/About'>About</Link></li>
                            <li><Link to='/Contact'>Contact</Link></li>
                        </ul>
                    </div>
              </nav>
                <Route exact path ='/' component={Home} render={() => {
                    <h1>Welcome</h1>
                }}/>
                <Route path ='/forms' component={Forms}/>
                <Route path ='/about' component={About}/>
                <Route path ='/contact' component={Contact}/>
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
