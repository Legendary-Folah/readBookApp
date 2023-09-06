import React, { Component } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext';

class NavBar extends Component {
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
        <ThemeContext.Consumer>{(context) => {
          return (
            <nav style={{ 
              background: theme.ui,
              color: theme.syntax
             }}>
                <h1>READING BOOK LIST</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>List</li>
                </ul>
            </nav>
          )
        }};
        
        </ThemeContext.Consumer>
    )
  }
};

export default NavBar;