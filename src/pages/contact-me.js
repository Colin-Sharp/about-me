import React from "react"

import Head from "../components/head"
import Header from "../components/header"

import contactMePic from "../images/get-in-touch.png"


class ContactMe extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <Header />
        <div className="page">
          <h1>Hey get in touch!!</h1>
          <img className="about-me-pic" src={contactMePic} alt="colin sinclair smith"></img>
          <p className="main-p about">If you are interested in working together, then please get in touch with me.
          Looking forward to hearing from you!</p>
          <ul className="contact-list">
            <li>Call Me: +44 (0) 7944878506</li>
            <li>Email Me: colinsinclairsmith2@gmail.com</li>
            <li>Location: Worthing, England</li>
          </ul>
          <ul className="contact-links">
            <li>
              <a href="https://github.com/Colin-Sharp">
                <i className="fab fa-github-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/colin-sinclair-smith-921071195/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto: colinsinclairsmith2@gmail.com">
                <i className="fas fa-envelope-square" id="email"></i>
              </a>
            </li>
          </ul>

        </div>
      </div>
    )
  }
}

export default ContactMe;