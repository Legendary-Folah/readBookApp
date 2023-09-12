import React, { createContext, useState } from 'react';
import { uuidv1 } from 'uuid';

export const BookContext = createContext();

const BookContextprovider = (props) => {

    const [ books, setBooks ] = useState([
        {title: 'Man of the year', author: 'Nicolas Amiri', id: 1},
        {title: 'Name of the Wind', author: 'Cody Anderson', id: 2},
        {title: 'One Last Ride', author: 'Fury Micheal', id: 3}
    ]);

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuidv1() }]);
    };

    return (
        <BookContext.Provider>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextprovider;