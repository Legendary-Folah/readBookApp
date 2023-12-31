import React, { createContext, useReducer, useEffect } from 'react';
import { Bookreducer } from '../Reducers/BookReducer';
// import {v1 as uuidv1} from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [ books, dispatch ] = useReducer(Bookreducer,[
        { title: 'Man of the year', author: 'Nicolas Amiri', id: 1},
        { title: 'Name of the Wind', author: 'Cody Anderson', id: 2}
    ], () => {
        const Data = localStorage.getItem('books');
        return Data ? JSON.parse(Data) : [];
    }
    );

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;