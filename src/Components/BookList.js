import React, { Component } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    return (
      <div className='book-list'>
        <ul>
            <li>The way of man is wicked</li>
            <li>Wicked Lagos</li>
            <li>Peace of Mind</li>
        </ul>
      </div>
    )
  }
};

export default BookList;