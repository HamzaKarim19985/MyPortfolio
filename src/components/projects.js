import React, { Component } from "react";

export default class project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="Container">
        <h1>Projects</h1>
        <div class="grid-container">
          {/*E-commerce website */}
          <div class="card">
            <div class="img-container">
              <img
                class="card-img-top"
                src="https://i.pinimg.com/236x/ab/ca/4c/abca4c51c7e166b2980105b5e98b7ac2.jpg"
                alt="React Project"
              />
            </div>
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
                class="btn btn-outline-secondary "
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://e-commerce-store-hk.netlify.com/"
                class="btn btn-outline-secondary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/*Portfolio Website */}
          <div class="card">
            <div class="img-container">
              <img
                class="card-img-top"
                src="https://i.pinimg.com/236x/ca/c3/c4/cac3c4364873fb6aea350735a1919cb4--user-profile-pictogram.jpg"
                alt="React Project"
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                <span class="text-title">Professional Portfolio Website |</span>{" "}
                React based with Router links, bootstrap CSS, navigation bar,
                and menu.
              </p>
            </div>

            <div class="btn-group" role="group">
              <a
                href="https://github.com/HamzaKarim19985/MyPortfolio"
                class="btn btn-outline-secondary"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://my-portfolio-hkarim.netlify.com/"
                class="btn btn-outline-secondary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/*CRUD APP */}
          <div class="card">
            <div class="img-container">
              <img
                class="card-img-top"
                src="https://miro.medium.com/max/1320/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                alt="React Project"
                target="_blank"
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                <span class="text-title">USER DATABASE (CRUD APP) |</span> ●
                React based website that can create, read, update, edit, search
                and delete user data that is retrieved from a custom JSON API
                server using HTTP methods
              </p>
            </div>
            <div class="btn-group" role="group">
              <a
                href="https://github.com/HamzaKarim19985/DatabaseCRUDapp"
                class="btn btn-outline-secondary"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://crud-userdata.netlify.com/"
                class="btn btn-outline-secondary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/*Recipe Search Website */}
          <div class="card">
            <div class="img-container">
              <img
                class="card-img-top"
                src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Pan-cooking-logo-by-yahyaanasatokillah-580x387.jpg"
                alt="React Project"
              />
            </div>
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
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://search-recipes-hk.netlify.com/"
                class="btn btn-outline-secondary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/*City Tours Website */}
          <div class="card">
            <div class="img-container">
              <img
                class="card-img-top"
                src="https://miro.medium.com/max/1320/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                alt="React Project"
                target="_blank"
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                <span class="text-title">City Tours Website | </span> Simple
                React based website that showcases information about worldwide
                city tours.
              </p>
            </div>
            <div class="btn-group" role="group">
              <a
                href="https://github.com/HamzaKarim19985/react-city-tours"
                class="btn btn-outline-secondary"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://react-city-tour-guide.netlify.com/"
                class="btn btn-outline-secondary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/*Quote Machine Website */}
          <div class="card">
            <div class="img-container">
              <img
                class="card-img-top"
                src="https://miro.medium.com/max/1320/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                alt="React Project"
                target="_blank"
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                <span class="text-title">Quote Machine Website | </span> Simple
                React based website that shows random quotes.
              </p>
            </div>
            <div class="btn-group" role="group">
              <a
                href="https://github.com/HamzaKarim19985/Quote-Machine"
                class="btn btn-outline-secondary"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://boring-mahavira-fc6c0e.netlify.com/"
                class="btn btn-outline-secondary"
                target="_blank"
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
