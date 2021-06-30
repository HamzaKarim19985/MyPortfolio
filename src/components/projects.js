import React, { Component, useState, useEffect } from "react";
import { dataArray, reactApps, nodeApps, fireBaseApps } from "../assets/data";
import { Project } from "./Project";
import PortfolioList from "./portfolioList/PortfolioList";
export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState("all");

  const list = [
    { id: "all", title: "All Apps" },
    { id: "react", title: "React.js Apps" },
    { id: "node", title: "Node.js Apps" },
    { id: "firebase", title: "Firebase Apps" },
  ];
  useEffect(() => {
    switch (selected) {
      case "firebase":
        setProjects(fireBaseApps);
        break;
      case "react":
        setProjects(reactApps);
        break;
      case "node":
        setProjects(nodeApps);
        break;

      default:
        setProjects(dataArray);
    }
  }, [selected]);

  return (
    <div class="Container">
      <h1>Projects</h1>
      <ul class="orderSelect">
        {list.map((item) => {
          return (
            <PortfolioList
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              title={item.title}
            ></PortfolioList>
          );
        })}
      </ul>
      <div class="grid-container">
        {projects.map((project, index) => {
          return <Project key={project.id} {...project}></Project>;
        })}
      </div>
    </div>
  );
};

export default Projects;
