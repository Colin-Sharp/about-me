import React from 'react'

import '../scss/layout.scss'
import { Link } from 'gatsby'

import logo from '../images/fox.png'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sideDrawerOpen: true,
    }
  }
  handleToggle() {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen })
  }
  handleHideLink(route) {
    if (typeof window !== "undefined") {
      return window.location.pathname !== route;
    }
  }
  render() {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
    const { sideDrawerOpen } = this.state
    return (
      <div className="toolbar">
        <div
          id="backdrop"
          className={`${sideDrawerOpen ? "" : "open"}`}
          onClick={e => this.handleToggle()}
        />
        <Link to="/">
          <img src={logo} alt="logo" className="toolbar-logo" />
        </Link>
        <nav className="toolbar-nav">
          <div className="toolbar-nav-items">
          <ul>
              {this.handleHideLink('/work-experience') ? (
                <Link to="/work-experience">
                  <li>Work Experience</li>
                </Link>
              ) : null}
              {this.handleHideLink('/skills') ? (
                <Link to="/skills">
                  <li>Skills</li>
                </Link>
              ) : null}
              {this.handleHideLink('/about-me') ? (
                <Link to="/about-me">
                  <li>About Me</li>
                </Link>
              ) : null}
              {this.handleHideLink('/contact-me') ? (
                <Link to="/contact-me">
                  <li>Contact Me</li>
                </Link>
              ) : null}
              {this.handleHideLink('/') ? (
                <Link to="/">
                  <li>Home</li>
                </Link>
              ) : null}
            </ul>
          </div>
        </nav>
        <div
          className="toolbar-toggle-button"
          onClick={e => this.handleToggle()}
        >
          <i id="toggleBtn" className="fas fa-bars"></i>
        </div>
        <div>
          <nav className={`${sideDrawerOpen ? "" : "open"}`} id="side-drawer">
            <ul>
              {this.handleHideLink('/work-experience') ? (
                <Link to="/work-experience">
                  <li>Work Experience</li>
                </Link>
              ) : null}
              {this.handleHideLink('/skills') ? (
                <Link to="/skills">
                  <li>Skills</li>
                </Link>
              ) : null}
              {this.handleHideLink('/about-me') ? (
                <Link to="/about-me">
                  <li>About Me</li>
                </Link>
              ) : null}
              {/* {this.handleHideLink('/projects') ? (
              <Link to="/projects">
                <li>Projects</li>
              </Link>
              ) : null} */}
              {this.handleHideLink('/contact-me') ? (
                <Link to="/contact-me">
                  <li>Contact Me</li>
                </Link>
              ) : null}
              {this.handleHideLink('/') ? (
                <Link to="/">
                  <li>Home</li>
                </Link>
              ) : null}
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
