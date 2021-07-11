import React, { Component } from "react";

export const PDF_Resume = () => {
  return (
    <object
      data="assets/Hamza_Karim_CS_Resume.pdf"
      type="application/pdf"
      width="100%"
      height="800px"
    >
      <p>
        It appears you don't have a PDF plugin for this browser. No biggie...
        you can{" "}
        <a href="assets/Hamza_Karim_CS_Resume.pdf">
          click here to download the PDF file.
        </a>
      </p>
    </object>
  );
};

export default PDF_Resume;
