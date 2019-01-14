import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from './pages/General/loading'
import Home from './pages/Home/home.js';
import MyCV from './pages/CV/index.js'

import './App.css';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Suspense fallback={Loading}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/cv" component={MyCV}/>

              </Switch>
            </Suspense>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
