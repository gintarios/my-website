import React from "react";
import "../App.css";
import "./MyProjects.css";

const MyProjects = () => {
  return (
    <div className="section-myprojects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-box">
        <div className="project project1">
          <a href="https://ginflix.herokuapp.com/" target="_black">
            {" "}
            <h6>Ginflix App</h6>
            <i className="fab fa-react" />
            <i className="fab fa-node" />
            <i className="fab fa-css3-alt" />
            <i className="fab fa-git" />
          </a>
        </div>
        <div className="project project2">
          <a href="http://spotify-siftr.herokuapp.com/" target="_black">
            {" "}
            <h6>Spotify Siftr</h6>
            <i class="fab fa-spotify" />
            <i className="fab fa-react" />
            <i className="fab fa-node" />
            <i className="fab fa-css3-alt" />
          </a>
        </div>
        <div className="project project3">
          <a href="https://github.com/gintarios" target="_black">
            {" "}
            <h6>More on </h6> <i class="fab fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
