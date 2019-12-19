import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Particles from "react-particles-js";
import ReactParticles from "react-particles-js";
import particlesConfig from "./particles-config.js";

export default class resume extends Component {
  render() {
    return (
      <Grid>
        <div style={({ position: "relative" }, { background: "black" })}>
          <ReactParticles
            params={particlesConfig}
            style={{
              position: "absolute",
              zIndex: 1,
              left: 0,
              right: 0,
              bottom: 0,
              top: 0
            }}
          />
        </div>
        <Cell className="resume-left-side" col={4}>
          <div style={{ textAlign: "center" }}>
            <img
              className="avatar-img"
              src="https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/50572337_759507457832972_4214815204732567552_n.jpg?_nc_ht=instagram.fyto1-2.fna.fbcdn.net&oh=d38ccd3f703e03ad4a8cd77aaa9bedae&oe=5E8F750B"
              alt="Avatar"
            />
          </div>
          <h2 style={{ paddingTop: "2rem" }}>Hamza Karim</h2>
          <h4 style={{ color: "grey" }}>Programmer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
            I initially did not expect to become a programmer, as I took no
            interest in coding.Everytime I would try my luck at it, it would
            follow in frustration and headaches.I was befuddled by the blocks of
            code that may as well have been hieroglyphics to me. Finally I took
            things slowly and started with a small project, a quote
            machine.After countless hours I finally got it to work and the joy I
            got from completing it helped me understand programming.Since then I
            have been attending the Ryerson University Computer Engineering
            program for three years, and in my 3 years here I have learned many
            skills and applied myself to work vigorously in pursuit of becoming
            a better programmer.I have also been learning and practicing during
            my free time about topics not covered in school.
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Email</h5>
          <p>hamzakarim1998@gmail.com</p>

          <h5>Web</h5>
          <p>https://my-portfolio-hamza-karim.netlify.com/</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        </Cell>

        <Cell className="resume-right-side" col={8}>
          <h2>Education</h2>
          <Grid>
            <Cell col={4}>
              <p>2016 - current</p>
            </Cell>
            <Cell col={8}>
              <h4 style={{ marginTop: "0px" }}>Ryerson Univeristy</h4>
              <p>
                Currently attending Ryerson University for Computer
                Engineering.Fourth year student that has completed many
                important courses related but not limited to: Object oriented
                Analysis Design, Software Systems, Digital systems,
                Microprocessor Systems,Algorithms and Data Structures
              </p>
            </Cell>
          </Grid>
          <hr style={{ color: "white" }} />

          <h2>Experience</h2>
          <Grid>
            <Cell col={4}>
              <p>2017-current</p>{" "}
            </Cell>
            <Cell col={8}>
              <p style={{ marginTop: "0px" }}>
                Experience with various javascript,react,html/css and java
                projects.Projects in categories but not limited to:Portfolio
                website,E-commerce website that sells phone products,Bank system
                java/javaFXML app, Recipe search website, City Tours, Quote
                machines, Surveys, Technical Documentation
              </p>
            </Cell>
          </Grid>

          <hr style={{ color: "white" }} />

          <h2>Skills</h2>
          <Grid>
            <Cell col={12}>
              <ul>
                <li>
                  <span style={{ fontWeight: "bold" }}>Javascript: </span>Value
                  vs Reference variable assighnment ,Closure, Destructuring,
                  Rest syntax, Array methods,Object oriented,Callback
                  functions,Async await, Promises
                </li>

                <li>
                  <span style={{ fontWeight: "bold" }}>HTML/CSS: </span>
                  Bootstrap,Grid and flex display,CSS frameworks, Styled
                  components,CSS variables,Responsive design
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>React: </span>
                  React hooks, Lifecycle methods, State and props,Event
                  Handlers, Fetching data from API, Functional components
                </li>
                <li>
                  <span style={{ fontWeight: "bold" }}>Java: </span>
                  Object-oriented programming concepts and patterns, Abstract
                  classes and interfaces, Constructors File IO and serialization
                  Collections: lists, maps, sets Access specifiers Exceptions
                  (checked and unchecked), Generics,Junit testing/debugging
                </li>
              </ul>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    );
  }
}
