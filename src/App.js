
import React, { Component } from 'react';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Navigation from './components/Navigation.js';
import Container from 'react-bootstrap/Container';
import Main from './components/main';


import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
          <Container>
          <Main/>
            <Home/>
            <About/>
            <Contact/>
         </Container>
      </div>
    );
  }
}

export default App;
