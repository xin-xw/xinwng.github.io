import React from "react";
import About from "../component/about/About";
import Intro from "../component/intro/Intro";
import ProjectCard from "../component/projectcard/ProjectCard";
import { Navbar } from "../component/navbar";
import ContactLinks from "../component/contacts/Contacts";
import projects from "../content/projects";
import statements from "../content/about-me";
import ProjectCard2 from "../component/projects/projects";
import hand_point_down from "./images/hand_point_down.svg";
import "./App.css";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="home">
        <a id="intro">
          <Navbar />
          <Intro />
        </a>
        <a id="about">
          <About statements={statements} />
        </a>
        <h1 id="projects" className="project-section tc">
          featured works
        </h1>
        <a className="projectcard_tac tc shadow-5">
          {/* <ProjectCard projectcard={projects} /> */}
          <ProjectCard2></ProjectCard2>
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
