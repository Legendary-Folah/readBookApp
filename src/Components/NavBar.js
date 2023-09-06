import React, { Component } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext';

class NavBar extends Component {
  render() {
    return (
        <ThemeContext.Consumer>{(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
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