import React from "react";
import ReactDom from "react-dom";
import htmlLogo from "./images/html_logo.png";
import cssLogo from "./images/css_logo.png";
import reactLogo from "./images/react_logo.png";

const rootElement = document.getElementById("root");

const feImages = (
  <div>
    <img src={htmlLogo} />
    <img src={cssLogo} />
    <img src={reactLogo} />
  </div>
);

const main = (
  <div>
    <h3>Subscribe</h3>
    <p>Sign up with your email address to receive news and updates</p>
    <input placeholder="First Name"></input>
    <input placeholder="Last Name"></input>
    <input placeholder="Email"></input>
    <button className="btn-success">Subscribe</button>
  </div>
);

const app = (
  <div>
    {feImages}
    {main}
  </div>
);

ReactDom.render(app, rootElement);
