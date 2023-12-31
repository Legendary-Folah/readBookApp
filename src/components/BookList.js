import React, { useContext } from 'react'
import { BookContext } from '../Contexts/BookContext';
import BookDetail from './BookDetail';

const BookList = () => {
    const { books } = useContext(BookContext);
  return books.length ? (
    <div className='book-list'>
        <ul>
            { books.map(book => {
                return (
                    <BookDetail book={book} key={book.id} />
                );
            })}
        </ul>
    </div>
  ) : (
    <div className='empty'>No books. Hello Freetime :)</div>
  )
}

export default BookList;