import React from "react";
import ReactDOM from "react-dom";

const fname = "Angela";
const lname = "Yu";
const num = 7;

// Javascript expressions can be inserted using curly braces
//  Note: Javascript statements (such as if/then etc) do not work this way
ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <p>Your lucky number is {num}</p>
    <p>1 + 1 is {1 + 1}</p>
    <p>Today's lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
