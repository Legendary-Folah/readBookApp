import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    useState([
        {title: 'Range of the Rover', id: 1},
        {title: 'Toyo of the Ta', id: 2},
        {title: 'Honda of the Accord', id: 3},
        {title: 'Pi of the Lot', id: 4}
    ])
    return (
        
    );
}
 
export default BookContextProvider;