//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

// In react dom simply you have to give the idea what to show ,
// and where to show with , in between.

ReactDOM.render(
  <div>
    <h1>Hie </h1>
    <ul>
      <li>what</li>
      <li>what</li>
      <li>what</li>
    </ul>
  </div>,
  document.getElementById("root")
);
