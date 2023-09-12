import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextprovider = (props) => {
    return (
        <BookContext.Provider>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextprovider;