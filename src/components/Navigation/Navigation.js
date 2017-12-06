import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <div className="Navigation__text">
          <div>Safe Walk Home</div>
          <div className="Navigation__item">
            <a>About</a>
          </div>
          <div className="Navigation__item">
            <a>Take A Trip</a>
          </div>
          <div className="Navigation__item">
            <a>Where We Operate</a>
          </div>
          <div className="Navigation__item">
            <a>Contact Us</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
