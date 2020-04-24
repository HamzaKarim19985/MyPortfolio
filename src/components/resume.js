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
              top: 0,
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
          <h4 style={{ color: "grey" }}>Software Developer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
            {" "}
            Ever since I took my first computer science class in high school, I
            have been obsessed with software development. I could not believe
            that there was this technology that could let you solve so many
            practical problems. I also loved being able to see the desired
            output as my reward after hours of work. To me, software development
            is a never ending puzzle that needs to be solved, and I will happily
            attempt to solve it.{" "}
          </p>
          <p>
            {" "}
            My computer science teacher instilled me with a passion and
            understanding for problem-solving. This passion has carried me
            through my education at Ryerson University. I have been attending
            the Ryerson University Computer Engineering program for three years,
            and in my 3 years here I have learned new languages, data
            structures, algorithms, compilers, higher level mathematics, and
            software engineering practices. I have also applied myself to work
            vigorously in pursuit of becoming a better software engineer by
            working on many projects ranging from a C.R.U.D app to an E-commerce
            website. But the most important thing I learned was that there was
            so much out there I have yet to learn.
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
            <Cell col={3}>
              <p>2016 - current</p>
            </Cell>
            <Cell col={9}>
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
            <Cell col={3}>
              <p>10/2019 - 03/2020</p>{" "}
            </Cell>
            <Cell col={9}>
              <p style={{ marginTop: "0px" }}>
                <h6>
                  Nov 2019 - Jan 2020 Freelance Web Developer | Mississauga,
                  Ontario{" "}
                </h6>
                <ul>
                  <li>
                    Determined coding requirements for site creation, including
                    e-commerce capability and specialized scripts
                  </li>
                  <li>
                    {" "}
                    Analyzed requirements and designed, developed and
                    implemented software applications for multiple websites
                  </li>

                  <li>
                    Tested websites and performed troubleshooting prior to
                    deployment
                  </li>
                  <li>
                    Designed, implemented and monitored web pages and sites for
                    continuous improvement{" "}
                  </li>
                  <li>
                    Established web hosting for site and uploaded site files to
                    hosting account
                  </li>
                  <li>
                    Link to demo model of website:
                    https://login-3f01e.firebaseapp.com{" "}
                  </li>
                  <li>
                    Link to GitHub Repo:
                    https://github.com/HamzaKarim19985/CafeteriaSystem
                  </li>
                </ul>
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
