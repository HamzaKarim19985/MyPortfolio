import React, { Component } from "react";
import Particles from "react-particles-js";
import ReactParticles from "react-particles-js";
import particlesConfig from "./particles-config.js";

export default class landingpage extends Component {
  render() {
    return (
      <div class="container">
        <div className=" landing-grid">
          <img
            className="avatar-img"
            src="https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/50572337_759507457832972_4214815204732567552_n.jpg?_nc_ht=instagram.fyto1-2.fna.fbcdn.net&oh=d38ccd3f703e03ad4a8cd77aaa9bedae&oe=5E8F750B"
            alt="Avatar"
          />
          <div className="landing-text">
            <h1>Computer Engineering Student | Software Developer</h1>
            <hr />

            <p>Javascript | Python | Java | HTML | CSS | React | Bootstrap</p>

            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/hamza-karim-4a3186133/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-linkedin hvr-float"></i>
              </a>

              <a
                href="https://github.com/HamzaKarim19985"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-github-square hvr-float"></i>
              </a>

              <a
                href="hamzakarim1998@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-envelope-square hvr-float"></i>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-facebook hvr-float"></i>
              </a>
            </div>

            <Particles
              params={{
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5,
                    },
                  },
                },
              }}
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
