import React, { Component } from "react";
import Scrollchor from "react-scrollchor";
import "./Navbar.css";

class Navbar extends Component {
  componentDidMount() {
    this.refs.navbar.addEventListener("click", (e) => {
      if (e.target.innerText === "Projects") {
        document
          .getElementById("projects")
          .scrollIntoView({ behavior: "smooth" });
      } else if (e.target.innerText === "Contacts") {
        document
          .getElementById("contacts")
          .scrollIntoView({ behavior: "smooth" });
      } else if (e.target.innerText === "about") {
        document.getElementById("about").scrollIntoView("about");
      }
    });
  }

  render() {
    return (
      <div className="navbar-container">
        {/* <name className="name" ref="name">
          xin wang
        </name> */}
        <nav className="navbar" ref="navbar">
          <Scrollchor to="#about">about me</Scrollchor>
          <Scrollchor to="#projects">personal projects</Scrollchor>
          <Scrollchor to="#contacts">let's connect</Scrollchor>
        </nav>
      </div>
    );
  }
}

export default Navbar;
