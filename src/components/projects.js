import React, { Component, useState } from "react";
import { dataArray } from "../assets/data";
import { Project } from "./Project";

export const Projects = () => {

  const [projects, setProjects] = useState(dataArray);

    return (
      <div class="Container">
        <h1>Projects</h1>
        <div class="grid-container">
          { projects.map( (project,index) => {
                  return (
                        <Project key = {project.id} {...project} ></Project>
                  );
          } ) }
 
          
          </div>
        </div>
    );
  };

export default Projects;