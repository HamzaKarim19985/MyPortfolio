import React, { Component } from "react";

export default class project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="Container">
        <h1>Projects</h1>
        <div class="grid-container">
          {/*E-commerce website */}
          <div class="card">
            <img
              class="card-img-top"
              src="https://miro.medium.com/max/1320/1*y6C4nSvy2Woe0m7bWEn4BA.png"
              alt="React Project"
            />

            <div class="card-body">
              <p class="card-text">
                <span class="text-title"> E-commerce Website |</span> React
                based with all website components; navigation,Router links,
                modules, product list,menu,cart and Paypal.
              </p>
            </div>
            <div class="btn-group" role="group">
              <a
                href="https://github.com/HamzaKarim19985/react-phone-store-recording"
                class="btn btn-outline-secondary"
              >
                Github
              </a>
              <a
                href="https://react-e-commerce-store-hamzakarim.netlify.com/"
                class="btn btn-outline-secondary"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/*Portfolio Website */}
          <div class="card">
            <img
              class="card-img-top"
              src="https://miro.medium.com/max/1320/1*y6C4nSvy2Woe0m7bWEn4BA.png"
              alt="React Project"
            />
            <div class="card-body">
              <p class="card-text">
                <span class="text-title">Professional Portfolio Website |</span>{" "}
                React based with Router links, bootstrap CSS, navigation bar,
                and menu.
              </p>
            </div>

            <div class="btn-group" role="group">
              <a href="http://google.com" class="btn btn-outline-secondary">
                Github
              </a>
              <a href="http://google.com" class="btn btn-outline-secondary">
                Live Demo
              </a>
            </div>
          </div>

          {/*Recipe Search Website */}
          <div class="card">
            <img
              class="card-img-top"
              src="https://miro.medium.com/max/1320/1*y6C4nSvy2Woe0m7bWEn4BA.png"
              alt="React Project"
            />

            <div class="card-body">
              <p class="card-text">
                <span class="text-title"> Recipe Search Website |</span> React
                based website utilizing recipe database api utilizing react
                hooks.{" "}
              </p>
            </div>
            <div class="btn-group" role="group">
              <a
                href="https://github.com/HamzaKarim19985/search-for-recipes-api"
                class="btn btn-outline-secondary"
              >
                Github
              </a>
              <a
                href="https://sleepy-varahamihira-7f8bde.netlify.com/"
                class="btn btn-outline-secondary"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/*City Tours Website */}
          <div class="card">
            <img
              class="card-img-top"
              src="https://miro.medium.com/max/1320/1*y6C4nSvy2Woe0m7bWEn4BA.png"
              alt="React Project"
            />

            <div class="card-body">
              <p class="card-text">
                <span class="text-title">City Tours Website |</span>Simple React
                based website that showcases information about worldwide city
                tours.
              </p>
            </div>
            <div class="btn-group" role="group">
              <a
                href="https://github.com/HamzaKarim19985/react-city-tours"
                class="btn btn-outline-secondary"
              >
                Github
              </a>
              <a
                href="https://react-city-tour-guide.netlify.com/"
                class="btn btn-outline-secondary"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/*Quote Machine Website */}
          <div class="card">
            <img
              class="card-img-top"
              src="https://miro.medium.com/max/1320/1*y6C4nSvy2Woe0m7bWEn4BA.png"
              alt="React Project"
            />

            <div class="card-body">
              <p class="card-text">
                <span class="text-title">Quote Machine Website |</span>Simple
                React based website that shows random quotes.
              </p>
            </div>
            <div class="btn-group" role="group">
              <a
                href="https://github.com/HamzaKarim19985/Quote-Machine"
                class="btn btn-outline-secondary"
              >
                Github
              </a>
              <a
                href="https://boring-mahavira-fc6c0e.netlify.com/"
                class="btn btn-outline-secondary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
