import React, { Component } from "react";
import Loader from "./Loader";
import SeasonDisplay from "./SeasonDisplay";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      lat: null,
      errorMessage: "",
    };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }
  componentDidUpdate() {}

  renderHelper = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return <h1>Error : {this.state.errorMessage}</h1>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }

    return <Loader message="Please accept the location request." />;
  };

  render() {
    return <div>{this.renderHelper()}</div>;
  }
}
