import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { Container } from 'semantic-ui-react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Nav from './Components/Nav'
import TopBar from './Components/TopBar'

function App() {
  return (
    <Router>
      <TopBar />
      <Nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Nav>
    </Router>
  );
}

export default App;
