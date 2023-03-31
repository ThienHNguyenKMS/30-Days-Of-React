import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Cat = ({ cats }) => {
  var weight =
    cats
      .map((cat) =>
        cat.weight.metric.split("-").reduce(function (a, b) {
          return +a + +b;
        })
      )
      .reduce((p, c) => p + c, 0) / cats.length;
  var age =
    cats
      .map((cat) =>
        cat.life_span.split("-").reduce(function (a, b) {
          return +a + +b;
        })
      )
      .reduce((p, c) => p + c, 0) / cats.length;

  return <div>{weight}, {age}</div>;
};

const Cat2 = ({ cat: { weight, life_span } }) => {
  // console.log(weight.metric, life_span);
  return <div></div>;
};

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchCountryData();
  }

  fetchCountryData = async () => {
    const url = "https://api.thecatapi.com/v1/breeds";
    try {
      const response = await axios.get(url);
      const data = await response.data;
      this.setState({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <p>{this.state.data.length}</p>
          <div>
            <Cat cats={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
