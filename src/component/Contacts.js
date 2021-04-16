import React, { Component } from "react";
import "./Contacts.css";

class ContactLinks extends Component {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a rel="noopener" target="_blank" href="mailto:xin@xinwang.me">
            xin@xinwang.me
          </a>
        </span>
        <span>
          <a rel="noopener" target="_blank" href="https://github.com/xinwng">
            github
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/xinwng"
          >
            linkedin
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;
