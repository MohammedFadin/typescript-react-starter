import * as React from "react";

export default class App extends React.Component<IProps, {}> {
  render() {
    return <h1>Hello from {this.props.appName}</h1>;
  }
}

interface IProps {
  appName: string;
  version: number;
}

interface IState {}
