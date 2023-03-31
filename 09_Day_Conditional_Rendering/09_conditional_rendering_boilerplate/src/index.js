// index.js
import React from "react";
import ReactDOM from "react-dom";

class Season extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <div>asdf</div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <div>
      <Season />
    </div>
  )}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
