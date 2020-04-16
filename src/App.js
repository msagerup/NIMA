import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ContextDataProvider } from './Context/ContextData';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Nav from './Components/Nav'
// import TopBar from './Components/TopBar'
import Footer from './Components/Footer'

function App() {
  return (
    <ContextDataProvider>
      <Router>
        {/* <TopBar /> */}
        <Nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Nav>
      </Router>
    </ContextDataProvider>
  );
}

export default App;
