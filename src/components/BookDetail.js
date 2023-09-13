import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const BookDetail = ({book}) => {
    const { dispatch } = useContext(BookContext);
    return (
        <li className="list">
            <div>
                <div className="title">
                    { book.title }
                </div>
                <div className="author">
                    { book.author }
                </div>
            </div>
            <FontAwesomeIcon 
                onClick={() => dispatch({type: removeBook, id: book.id})}
                icon={faTrash} 
            />
        </li>
    );
}
 
export default BookDetail;