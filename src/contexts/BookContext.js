import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextprovider = (props) => {

    const [ books, setBooks ] = useState([
        {title: 'Man of the year', author: 'Nicolas Amiri', id: 1},
        {title: 'Name of the Wind', author: 'Cody Anderson', id: 2},
        {title: 'One Last Ride', author: 'Fury Micheal', id: 3}
    ]);

    return (
        <BookContext.Provider>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextprovider;