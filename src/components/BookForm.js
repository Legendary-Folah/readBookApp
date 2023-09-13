import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";

const NewBookForm = () => {
    const { addBook } = useContext(BookContext);
    return (
        <div></div>
    );
}
 
export default NewBookForm;