import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header/Header";
import About from "./About/About";
import MyProjects from "./MyProjects/MyProjects";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <About />
          <Skills />
          <MyProjects />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
