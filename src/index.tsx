import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

export default class Index extends React.Component {
  render() {
    return <Header />;
  }
}

export class Header extends React.Component {
  render() {
    return <h1>Hello Typescript with React JS!!</h1>;
  }
}
const ROOT = document.querySelector(".container");
ReactDOM.render(<App appName="Fadin" version={1.0} />, ROOT);
