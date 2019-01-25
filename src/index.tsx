import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
  render() {
    return <h1>Hello Typescript with React JS!</h1>;
  }
}
const ROOT = document.querySelector(".container");
ReactDOM.render(<App />, ROOT);
