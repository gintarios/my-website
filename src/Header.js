import React, { Component } from "react";
import "./App.css";
import { NavHashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="section-header" id="home">
      <div className="navi">
        <Link to="/#home">
          <h3>Home</h3>
        </Link>
        <Link to="/#about">
          <h3>About Me</h3>
        </Link>
        <Link to="/#skills">
          <h3>Skills</h3>
        </Link>
        <Link to="/#projects">
          <h3>My Projects</h3>
        </Link>
      </div>

      <h1>Gintare Zolubaite</h1>
      <h2> London based Full-Stack Software Developer </h2>
    </div>
  );
};

export default Header;
