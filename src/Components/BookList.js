import React, { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return ( 
    <div className='book-list' style={{
      background: theme.bg,
      color: theme.syntax
    }}>
      <ul>
          <li style={{ background: theme.ui }}>The way of man is wicked</li>
          <li style={{ background: theme.ui }}>Wicked Lagos</li>
          <li style={{ background: theme.ui }}>Peace of Mind</li>
      </ul>
    </div>
   );
}
 
export default BookList;
