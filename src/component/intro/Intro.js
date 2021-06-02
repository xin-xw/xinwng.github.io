import React, { Component } from "react";
import Typewriter from "./Typewriter";
import Scrollchor from "react-scrollchor";
import "./Intro.css";

class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="intro">
        <Typewriter className="intro-title b" text="Hi, I'm Xin!" />
        <div className="intro-description tc">
          🌟 3<sup>rd</sup> year computer science w/ business applications
          student @{" "}
          <a href="https://www.ucr.edu/" target="_blank" rel="noreferrer">
            UCR
          </a>{" "}
          <br></br>🌟 current: swe intern @{" "}
          <a href="https://vistendo.com/" target="_blank" rel="noreferrer">
            Vistendo
          </a>
          {", "}
          advanced tech interview prep @{" "}
          <a
            href="https://info.codepath.org/technical-interview-prep"
            target="_blank"
            rel="noreferrer"
          >
            CodePath
          </a>
          <br></br>🌟{" "}
          <Scrollchor to="#projects">
            click to jump to featured works
          </Scrollchor>
        </div>
      </div>
    );
  }
}

export default Intro;
