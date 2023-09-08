import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return (
      <div class="theme-switch-container">
        <label class="theme-slider" for="checkbox">
          <input type="checkbox" id="checkbox" />
          <div class="round slider"></div>
        </label>
      </div>
    )
  }
}

export default Slider;