import React, { Component } from "react";
import Typewriter from "./Typewriter";
import "./Intro.css";

class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="intro">
        <Typewriter className="intro-title b" text="hey, i'm Xin!" />
        <div className="intro-description tc">
          ⭐ i am currently a 3<sup>rd</sup> year computer science w/ business
          applications student interested in software enginnering and product
          management. <br></br> ⭐ currently: interning @ vistendo & with plans
          to take summer courses
        </div>
      </div>
    );
  }
}

export default Intro;
