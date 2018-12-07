import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import MyProjects from "./MyProjects";
import Skills from "./Skills";
import Footer from "./Footer";

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
