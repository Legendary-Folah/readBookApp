import React, { useContext } from 'react'
import { BookContext } from '../Contexts/BookContext';
import BookDetail from './BookDetail';

function BookList() {
    const { books } = useContext(BookContext);
  return books.length ? (
    <div className='book-list'>
        { books.map(book => {
            return (
                <BookDetail book={book} key={book.id} />
            )
        }) }
    </div>
  ) : (
    <div className='empty'>No books. Hello Freetime :)</div>
  )
}

export default BookList