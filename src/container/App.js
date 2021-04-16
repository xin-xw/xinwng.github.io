import React from "react";
import About from "../component/About";
import Intro from "../component/Intro";
import ProjectCard from "../component/ProjectCard";
import Navbar from "../component/Navbar";
import ContactLinks from "../component/Contacts";
import projects from "../content/projects";
import statements from "../content/about-me";
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
        <h1 id="projects" className="project-section tc f1">
          personal projects
        </h1>
        <a className="projectcard_tac tc shadow-5">
          <div>
            <ProjectCard projectcard={projects} />
          </div>
        </a>
        <a id="contacts">
          <ContactLinks />
        </a>
      </div>
    );
  }
}
