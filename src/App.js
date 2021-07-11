import React from "react";
import "./App.css";
import { Content, Drawer, Header, Layout, Navigation } from "react-mdl";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/landingpage";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Resume from "./components/resume";
import NavBar from "./components/navBar";
import PDF_Resume from "./components/PDF_Resume";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <NavBar />
        <Content>
          <div className="page-content" />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/pdf" component={PDF_Resume} />
          </Switch>
        </Content>
      </Layout>
    </React.Fragment>
  );
}

export default App;
