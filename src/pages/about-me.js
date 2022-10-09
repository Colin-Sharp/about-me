import React from "react";
// import Reveal from "react-reveal/Reveal";

import Head from "../components/head";
import Header from "../components/header";
import Footer from "../components/footer";

import aboutMePic from "../images/about-me-pic.png";

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <Header />
        <div>
          <div className="page">
          <h1>About Me</h1>
            <img className="about-me-pic" src={aboutMePic} alt="colin sinclair smith"></img>
            {/* <Reveal effect="fadeInUp"> */}
              <div id="intro" className="section">
                <div className="overlay">
                  <p className="main-p">
                    I am a developer who is passionate about learning and work well in a team. I 
                    have very strong interpersonal communication skills. I enjoy solving problems 
                    and have a keen eye for detail. 
                    <br/><br/>
                    In my free time I like to do courses to reinforce my core knowledge and learn 
                    new and exciting method and languages. I also like to push myself to learn other 
                    spoken language I know basic Norwegian and I have just starting learning Russian.
                    <br/><br/>
                    I also like travelling and learning about other cultures, I have travelled to a 
                    lot of countries in Europe. I lived in Norway for 4 years when I was working there 
                    as a commercial diver. I did a lot of travelling when I was in the Parachute 
                    Regiment, to the middle east and some training in central America.
                    <br/><br/>
                    I love to keeping fit and I am a keen runner and enjoy playing tennis. I also 
                    like illustration and aspire to learning the drums.
                    <br/><br/>
                    I am very enthusiastic, hard working and passionate about learning. I am always 
                    pushing myself to become a better developer!
                  </p>
                </div>
              </div>
            {/* </Reveal> */}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default AboutMe;