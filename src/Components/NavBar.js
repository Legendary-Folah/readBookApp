import React, { Component } from 'react'

class NavBar extends Component {
  render() {
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

export default  NavBar;