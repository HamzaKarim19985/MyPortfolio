import React from "react";
import "./App.css";
import { Content, Drawer, Header, Layout, Navigation } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="gradient-color"
          title={
            <Link to="/" style={{ color: "white" }}>
              <i class="fa fa-home hvr-grow"> My Portfolio</i>
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="resume">Resume</Link>
            <Link to="projects">Projects</Link>
          </Navigation>
        </Header>

        <Drawer
          title={
            <Link to="/" style={{ color: "Black", textDecoration: "none" }}>
              <i class="fa fa-home"> My Portfolio</i>
            </Link>
          }
        >
          <Navigation>
            <Link to="resume" class="hvr-sweep-to-right">
              Resume
            </Link>
            <Link to="projects">Projects</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
