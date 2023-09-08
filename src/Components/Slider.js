import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return (
      <div className="theme-switch-container">
        <label className="theme-slider" htmlFor="checkbox">
          <input type='checkbox' id="checkbox"/>
          <div className="round slider"></div>
        </label>
      </div>
    )
  }
}

export default Slider;