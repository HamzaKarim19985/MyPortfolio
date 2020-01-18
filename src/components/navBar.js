import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route, Link } from "react-router-dom";
import { Content, Drawer, Header, Layout, Navigation } from "react-mdl";

export default class NavBar extends Component {
  render() {
    return (
      <Header
        id="navbar-container"
        className="gradient-color"
        title={
          <h1 class="heading">
            <span class="word1">My</span>
            <span class="word2">Portfolio</span>
          </h1>
        }
        scroll
      >
        {" "}
        <Navigation>
          <ul id="navBar-list" class="navbar-nav">
            <li class="nav-item logo">
              <Link to="/">
                {" "}
                <FontAwesomeIcon icon={faHome} />
              </Link>
              <span class="link"> Home</span>
            </li>
            <li class="nav-item logo">
              <Link to="/resume">
                {" "}
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <span class="link"> Resume</span>
            </li>
            <li class="nav-item logo">
              <Link to="/projects">
                {" "}
                <FontAwesomeIcon icon={faBriefcase} />
              </Link>
              <span class="link">Projects</span>
            </li>
          </ul>
        </Navigation>
      </Header>
    );
  }
}
