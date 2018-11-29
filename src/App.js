import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import About from './About';
import MyProjects from './MyProjects';
import ContactMe from './ContactMe';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <About />
          <MyProjects />
          <ContactMe />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
