import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';

const NavBar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>Reading List</h1>
            <p>You Currently have { books.length } books to go through...</p>
        </div>
    );
}
 
export default NavBar;