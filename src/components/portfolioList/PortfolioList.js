import React, { Component, useState, useEffect } from "react";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "orderSelectItem active" : "orderSelectItem"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
