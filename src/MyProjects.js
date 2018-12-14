import React, { Component } from "react";
import "./App.css";

const MyProjects = () => {
  return (
    <div className="section-myprojects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-box">
        <div className="project project1">
          <a href="https://ginflix.herokuapp.com/" target="_black">
            {" "}
            Ginflix App
          </a>
        </div>
        <div className="project project2">
          <a href="http://spotify-siftr.herokuapp.com/" target="_black">
            {" "}
            Softify Siftr
          </a>
        </div>
        <div className="project project3">
          <a href="" target="_black">
            {" "}
            Comming Soon...{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
