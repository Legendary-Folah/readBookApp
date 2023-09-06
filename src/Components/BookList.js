import React, { Component } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className='book-list'>
        <ul style={{
          background: theme.bg,
          color: theme.syntax
        }}>
            <li style={{ background: theme.ui }}>The way of man is wicked</li>
            <li style={{ background: theme.ui }}>Wicked Lagos</li>
            <li style={{ background: theme.ui }}>Peace of Mind</li>
        </ul>
      </div>
    )
  }
};

export default BookList;