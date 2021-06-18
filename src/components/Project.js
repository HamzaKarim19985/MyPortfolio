import React, { Component, useState } from "react";

export const Project = ({
  key,
  title,
  img,
  description,
  githubLink,
  demoLink,
}) => {
  return (
    <div class="card">
      <div class="img-container">
        <img class="card-img-top" src={img} alt="React Project" />
      </div>
      <div class="card-body">
        <p class="card-text">
          <span class="text-title"> {title}|</span> {description}
        </p>
      </div>
      <div class="btn-group" role="group">
        <a href={githubLink} class="btn btn-outline-secondary " target="_blank">
          Github
        </a>
        <a href={demoLink} class="btn btn-outline-secondary" target="_blank">
          Live Demo
        </a>
      </div>
    </div>
  );
};
