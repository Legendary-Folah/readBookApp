import React, { Component } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext';
import { AuthContext } from '../Contexts/AuthContext';

class NavBar extends Component {
  render() {
    return (
      <AuthContext.Consumer>{(authcontext) => (
        <ThemeContext.Consumer>
          {(themecontext) => {
            const { isAuthenticated, toggleAuth } = authcontext;
            const { isLightTheme, light, dark } = themecontext;
            const theme = isLightTheme ? light : dark;
            return (
              <nav style={{ 
                background: theme.ui,
                color: theme.syntax
               }}>
                  <h1>READING BOOK LIST</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? 'Logged In' : 'Logged Out'}
                  </div>
                  <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>List</li>
                  </ul>
              </nav>
            )
          }}
        </ThemeContext.Consumer>
      )}  
      </AuthContext.Consumer>
    )
  }
};

export default NavBar;