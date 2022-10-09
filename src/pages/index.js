import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"
import Header from "../components/header"
import Footer from "../components/footer"

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <Header />
        <div className="home-main">
          <div>
            <div className="link first">
              <Link to="/work-experience">
                <h1>Work Experience</h1>
              </Link>
            </div>
          </div>
          <div>
            <div className="link">
              <Link to="/skills">
                <h1>Skills</h1>
              </Link>
            </div>
          </div>
          <div>
            <div className="link">
              <Link to="/about-me">
                <h1>About Me</h1>
              </Link>
            </div>
          </div>
          <div>
            <div className="link">
              <Link to="/contact-me">
                <h1>Contact Me</h1>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default IndexPage
