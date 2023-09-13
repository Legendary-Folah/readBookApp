import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const BookDetail = ({book}) => {
    const { removeBook } = useContext(BookContext);
    return (
        <li>
            <div>
                <div className="title">
                    { book.title }
                </div>
                <div className="author">
                    { book.author }
                </div>
            </div>
            <button className='button' onClick={() => removeBook(book.id)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </li>
    );
}
 
export default BookDetail;