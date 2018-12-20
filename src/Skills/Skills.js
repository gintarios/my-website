import React from "react";
import "../App.css";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="section-skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-item">
          <i className="fab fa-react" />
        </div>
        <div className="skills-item">
          <i className="fab fa-js" />{" "}
        </div>

        <div className="skills-item">
          <i className="fab fa-node" />{" "}
        </div>
        <div className="skills-item">
          <i className="fab fa-html5" />{" "}
        </div>
        <div className="skills-item">
          <i className="fab fa-css3-alt" />{" "}
        </div>

        <div className="skills-item">
          <i className="fab fa-git" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Skills;
