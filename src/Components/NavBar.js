import React, { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext';
import { AuthContext } from '../Contexts/AuthContext';


const NavBar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
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
  );
}
 
export default NavBar;