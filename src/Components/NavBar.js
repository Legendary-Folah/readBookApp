import React, { Component } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext';

class NavBar extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    return (
      <div>
        <nav>
            <h1>READING BOOK LIST</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>List</li>
            </ul>
        </nav>
      </div>
    )
  }
};

export default NavBar;