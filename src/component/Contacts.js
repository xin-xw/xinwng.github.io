import React, { Component } from "react";
import "./Contacts.css";

class ContactLinks extends Component {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a rel="noopener" target="_blank" href="mailto:xin@xinwang.me">
            <u>xin@xinwang.me</u>
          </a>
        </span>
        {/* <span>
          <a rel="noopener" target="_blank" href="https://github.com/xinwng">
            <u>github</u>
          </a>
        </span> */}
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/xinwng"
          >
            <u>linkedin</u>
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;
