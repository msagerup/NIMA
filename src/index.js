

import './index.css';
import 'antd/dist/antd.css'; 

import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
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

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');

const App = ({hideLoader}) => {
  useEffect(hideLoader, []);

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

setTimeout(() => 
  // the show/hide functions are passed as props
  ReactDOM.render(
    <App
      hideLoader={hideLoader}
      showLoader={showLoader} 
      />,
    document.getElementById('app')
  )
, 1000);

// export default App;
