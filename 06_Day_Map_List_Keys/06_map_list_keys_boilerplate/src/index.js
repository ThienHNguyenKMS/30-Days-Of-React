import React from "react";
import ReactDOM, { render } from "react-dom";
import HighestPopulations from "../src/data/ten_most_highest_populations";

const prime = {
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Montserrat",
  margin: "2px auto",
  borderRadius: "5px",
  width: "5%",
  border: "2px solid white",
  backgroundColor: "red",
};

const even = {
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Montserrat",
  margin: "2px auto",
  borderRadius: "5px",
  width: "5%",
  border: "2px solid white",
  backgroundColor: "green",
};

const odd = {
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Montserrat",
  margin: "2px auto",
  borderRadius: "5px",
  width: "5%",
  border: "2px solid white",
  backgroundColor: "yellow",
};

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

class HexaColor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let styles = {
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Montserrat",
      margin: "2px auto",
      borderRadius: "5px",
      width: "75%",
      border: "2px solid white",
      backgroundColor: this.props.bgColor,
    };
    return <div style={styles}>{this.props.bgColor}</div>;
  }
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

class NumberColor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (isPrime(this.props.number)) {
      return <div style={prime}>{this.props.number}</div>;
    } else if (this.props.number % 2 === 0) {
      return <div style={even}>{this.props.number}</div>;
    } else {
      return <div style={odd}>{this.props.number}</div>;
    }
  }
}

class Ex21 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let numbers = [];
    for (let index = 0; index < 32; index++) {
      numbers.push(index);
    }
    // console.log(numbers);
    let formattedColors = numbers.map((num) => <NumberColor number={num} />);
    return <div>{formattedColors}</div>;
  }
}

class Ex22 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let numbers = [];
    for (let index = 0; index < 32; index++) {
      numbers.push(index);
    }
    // console.log(numbers);
    let formattedNums = numbers.map(() => <HexaColor bgColor={hexaColor()} />);
    return <div>{formattedNums}</div>;
  }
}

const Country = ({ country: { country, population } }) => {
  return (
    <div>
      <span>{country} </span>
      <span> {population}</span>
    </div>
  );
};

const Ex31 = ({ countries }) => {
  const list = countries.map((con) => <Country country={con} />);
  return <div>{list}</div>;
};

const App = () => {
  return (
    <div>
      <Ex21 />
      <Ex22 />
      <Ex31 countries={HighestPopulations} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
