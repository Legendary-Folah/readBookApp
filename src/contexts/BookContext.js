import React, { createContext, useState } from 'react';
import {v1 as uuidv1} from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [ books, setBooks ] = useState([
        { title: 'Man of the year', author: 'Nicolas Amiri', id: 1},
        { title: 'Name of the Wind', author: 'Cody Anderson', id: 2},
        { title: 'One Last Ride', author: 'Fury Micheal', id: 3}
    ]);

    const addBook = ( title, author ) => {
        setBooks([...books, {title: title, author, id: uuidv1() }]);
    };

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    return (
        <BookContext.Provider value={{addBook, removeBook, books}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;