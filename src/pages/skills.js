import React from "react"

import Head from "../components/head"
import Header from "../components/header"
import Footer from "../components/footer"

class Skills extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <Header />
        <div className="page">
          <div className="overlay">
            <div id="skill">
              <h1>Skills</h1>
            </div>
            <div className="tech-container">
              <div>
                <ul>
                  <li className="level five">JavaScript</li>
                  <li className="level four">Vue</li>
                  <li className="level three">Vuex</li>
                  <li className="level three">Nuxt</li>
                  <li className="level three">Angular2</li>
                  <li className="level two">ngrx</li>
                  <li className="level two">React</li>
                  <li className="level two">Redux</li>
                  <li className="level two">Gatsby</li>
                  <li className="level four">JQuery</li>
                  <li className="level five">HTML5</li>
                  <li className="level four">CSS</li>
                  <li className="level three">SASS</li>
                  <li className="level four">TailwindCSS</li>
                  <li className="level two">ITCSS</li>
                  <li className="level four">Git</li>
                  <li className="level one">C# .Net</li>
                  <li className="level two">OOP</li>
                </ul>
              </div>
              <div>
                <div className="lang">
                  <h2>Design</h2>
                  <ul>
                    <li className="level two">InDesign</li>
                    <li className="level two">Figma</li>
                    <li className="level four">UX</li>
                    <li className="level four">UI</li>
                    <li className="level four">Mobile First design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Skills;