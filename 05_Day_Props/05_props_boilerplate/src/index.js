import React from "react";
import ReactDOM from "react-dom";
import HTMLLogo from "./images/html_logo.png";
import CSSLogo from "./images/css_logo.png";
import JSLogo from "./images/js_logo.png";
import ReactLogo from "./images/react_logo.png";

// EX2.1
const FELogos = [HTMLLogo, CSSLogo, JSLogo, ReactLogo]
const Ex21 = ({ logos }) => (
    logos.map((logo) => <img src={logo} />)
  );
  
/////////////////////////////////////////////

// EX3.1
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const Ex31 = ({ color }) => (
  <div style={{backgroundColor: color}}>{color}</div>
);

/////////////////////////////////////////////

// EX3.2
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

const Button = ({ text, style }) => <button style={style}>{text}</button>;

const techs = ["HTML", "CSS", "Javascript"];
const formattedTechs = techs.map((tech) => (
  <Button key={tech} text={tech} style={buttonStyles} />
));

const user = {
  FirstName: "Hjhj",
  LastName: "Jhjh",
};

const Ex32 = ({ user, skills }) => (
  <div>
    {user.FirstName}
    {user.LastName}
    {skills}
  </div>
);
////////////////////////////////////////////

const App = () => (
  <div>
    <Ex21 logos={FELogos} />
    <Ex31 color={hexaColor()} />
    <Ex32 user={user} skills={formattedTechs} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
