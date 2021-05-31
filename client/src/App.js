import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main'
import Header from './components/Header'
import Favorite from './components/Favorite'


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/favorite">
              <Favorite />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
