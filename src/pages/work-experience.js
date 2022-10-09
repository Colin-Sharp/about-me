import React from "react";
// import Reveal from "react-reveal/Reveal";

import Head from "../components/head";
import Header from "../components/header";
import Footer from "../components/footer";

import para from "../images/para.svg";
import dive from "../images/diver.svg";
import crowdcomms from "../images/crowdcommslogo.png";
import loadbalancer from "../images/loadbalancer-logo.png";
import leadstream from "../images/leadstream.jpg";
import ifigo from "../images/infigo-logo-colour.svg"

class WorkExperience extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <Header />
          <div className="page">
            {/* <Reveal effect="fadeInUp"> */}
              <section className="section">
                <div className="overlay">
                  <h2>The First Battalion Parachute Regiment 2003-2015</h2>
                  <div className="image-wrapper">
                    <img
                      className="para"
                      src={para}
                      alt="paratroopers parchuting"
                    />
                  </div>
                  <p className="main-p">
                    During my time in the military I completed several courses
                    which have honed my skills in leadership and teaching,
                    effective communication and decision making in high stress
                    situations as well as navigation and weapon handing. I have
                    extensive experience of commanding groups of people, from
                    small groups of four to groups of twenty and applying risk
                    assessment in combat situations and health and safety in everyday 
                    work. I have worked closely with people from different
                    nationalities. I possess strong communication and
                    interpersonal skills developed while working in groups for
                    extended periods. I have carried out seven operational tours,
                    one in Northern Ireland and six in Afghanistan.
                      </p>
                </div>
              </section>
            {/* </Reveal> */}
            {/* <Reveal effect="fadeInUp"> */}
              <section className="section">
                <div className="overlay">
                  <h2>
                    AKVA Group Marine Services 2015-2018 <br />
                    Techno Dive 2018-2019
                  </h2>
                  <div className="image-wrapper">
                    <img className="diver" src={dive} alt="diver" />
                  </div>
                  <p className="main-p">
                    In my time working as a diver I have gained a wealth of
                    experience within the fish farm industry. I have had the
                    opportunity to do a large number of dives. I have also
                    completed many dives doing various jobs working in a small
                    team including experience with larger projects on oil rigs.
                        <br />
                    <br />
                        When I was working for Techno Dive, I was again working in
                        small teams. There were always new problems to overcome like
                        using an array of different equipment underwater, fixing
                        problems with boat engines, fixing ROV’s and setting up OS.
                        Concurrently to working as a diver, I was studying web
                        development. Learning the basics of logic and computational
                        thinking, HTML, CSS, JavaScript. I finished Complete Web
                        Development Bootcamp course. Then completed Modern React with
                        Redux course. I also have worked with static site generators,
                        Jekyll, Gatsby.js and Next.js.
                      </p>
                </div>
              </section>
            {/* </Reveal> */}
            {/* <Reveal effect="fadeInUp"> */}
              <section className="section">
                <div className="overlay">
                  <h2>Crowd Comms 2019-2020</h2>
                  <div className="image-wrapper">
                    <img className="coding" src={crowdcomms} alt="programming" style={{ borderRadius: '5px' }} />
                  </div>
                  <p className="main-p">
                    When I was working in CrowdComms as a junior front-end
                    developer, I got the chance to work on a very large and
                    complex project. I gained a great experience in a company that
                    is thriving and fast moving.
                      </p>
                </div>
              </section>
              <section className="section">
                <div className="overlay">
                  <h2>Loadbalancer.org</h2>
                  <div className="image-wrapper">
                    <img className="coding" src={loadbalancer} alt="programming" style={{ borderRadius: '5px' }} />
                  </div>
                  <p className="main-p">
                    In my time working at loadbalancer.org, I have had the opportunity to really push my skills and
                    problem solving abilities. Working with Angular on their load balancing app, I have become
                    comfortable with utilising Angular awesome OOP functionality. I am familiar with using Angular:
                    components, services, directives, enums, resolvers, models, pipes, making api calls to name some
                    of the parts of Agular I often work with.
                    I have also been working with forms both template driven and reactive. Another aspect that I
                    have really enjoyed working with is SCSS, that I have been working on converting the app
                    from CSS to its the super seed SCSS. Working with SCSS: variables, mixins, nesting and more,
                    massively reducing repetitive code.
                    On top of always pushing myself to improve my coding abilities, I have also learnt a lot about 
                    networking and have been taking a Network+ Certification course, where I have learnt
                    all about the OSI model and how data is sent and received.
                      </p>
                </div>
              </section>
              <section className="section">
                <div className="overlay">
                  <h2>Leadstream</h2>
                  <div className="image-wrapper">
                    <img className="coding" src={leadstream} alt="programming"/>
                  </div>
                  <p className="main-p">
                    Working at Leadstream I have expanded my knowledge working a Vue.js with a C# backend to create landing pages to for 
                    the sale of leads. I have been working closely with graphic designers and use their spec designs made on Figma to 
                    create high quality pages with good performance, accessibility, following best practices and utilising SEO. 
                    I have very much enjoy learning new skills, completing a course Vue as well as course on JavaScript to reinforce my 
                    cord knowledge (e.g. JavaScript Understanding the Weird Parts) and CSS learning flexbox, Inverted triangle CSS and 
                    Tailwind CSS. I have had the opportunity to convert a code base that was using Jekyll and Storyblok (headless CMS) 
                    to use Nuxt and Storyblok (headless CMS).
                    In my own time I created an app with Nuxt.js to progress my skills, it has a login/register, you can share ideas 
                    and vote on other ideas and see the results of the popularity of the ideas. Using Airtable as my backend to make all REST API requests.
                    I have push myself to learn as much as possible, not just with JavaScript, CSS or HTML but also using SEO tool, 
                    Schemas, using headless CMS’s like Storyblok and Strapi. I always working on expanding my skill and knowledge.
                  </p>
                </div>
              </section>
              <section className="section">
                <div className="overlay">
                  <h2>Infigo (current)</h2>
                  <div className="image-wrapper">
                    <img className="coding" src={ifigo} alt="programming"/>
                  </div>
                  <p className="main-p">
                    My current work is at Infigo, a web-to-print company, as a Vue.js Developer. My role here is to work on our main product 
                    (web-to-print software) and on our InDesign plugin (which allows you to do so much more, including adding logic to the 
                    fields you export). The main product's front end and the plugin are written in Vue.js. Most of the work involves adding 
                    new features, fixing bugs, improving styling, and improving the structure.
                    I also work on some backend tasks (C#) and have completed a C# course. Even though my main strengths are still on the 
                    front end with JavaScript, TypeScript, CSS, and HTML, I am also concentrating on .Net and C#, as I would like to use 
                    C# to become a full-stack developer.  Soon be taking on larger tasks in C#.
                    In addition, I work on old parts of the product written in Angular.js fixing any problems that we may have there.  
                    I solve problems for customers that are having an issue with their web-to-print storefront or any issue with InDesign/our plugin.
                  </p>
                </div>
              </section>
            {/* </Reveal> */}
          </div>
        <Footer />
      </div>
    )
  }
}

export default WorkExperience