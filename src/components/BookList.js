import React, { useContext } from 'react'
import { BookContext } from '../Contexts/BookContext'

function BookList() {
    const { books } = useContext(BookContext);
  return (
    <div>

    </div>
  )
}

export default BookList