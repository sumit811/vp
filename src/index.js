import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
/////
import HeaderMsg from './components/HeaderMsg';
import LogoBnr from './components/LogoBnr';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
/////
import App from './App';
import About from './About';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div id="App" className="container">
        <HeaderMsg />
        <LogoBnr />
        <NavBar />
        <Route path="/" exact strict component={App} />
        <Route path="/aboutus" exact component={About} />
        <Route path="/contactus" exact component={Contact} />
        <Footer />
      </div>
    </Router>
  )
  
ReactDOM.render(routing, document.getElementById('root'))
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
