import React from "react";
import About from "../component/About";
import Intro from "../component/Intro";
import ProjectCard from "../component/ProjectCard";
import Navbar from "../component/Navbar";
import ContactLinks from "../component/Contacts";
import projects from "../content/projects";
import statements from "../content/about-me";

import hand_point_down from "./images/hand_point_down.svg";
import "./App.css";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="home">
        <Navbar />
        <Intro />
        <a id="about">
          <About statements={statements} />
        </a>
        <h1 id="projects" className="project-section tc">
          personal projects
        </h1>
        <a className="projectcard_tac tc shadow-5">
          <div>
            <ProjectCard projectcard={projects} />
          </div>
        </a>
        <h3 id="contacts" className="contacts-section tc">
          connect with me
          <div class="hand_point_down bounce">
            <img
              width="40"
              height="40"
              src={hand_point_down}
              alt="hand point down"
            />
          </div>
        </h3>
        <p className="contacts-sub">
          <ContactLinks />
        </p>
      </div>
    );
  }
}
