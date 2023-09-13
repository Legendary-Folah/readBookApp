import React, { useContext, useState } from "react";
import { BookContext } from "../Contexts/BookContext";

const NewBookForm = () => {
    const { addBook } = useContext(BookContext);
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    return (
        <form>
            <input 
                type="text" 
                placeholder="Book Title" 
                value={title}
                onChange={e => setTitle(e.target.value)} 
                required
            />
            <input 
                type="text" 
                placeholder="Author" 
                value={author}
                onChange={e => setAuthor(e.target.value)} 
                required
            />
            <input type="submit" value='Add Book' />
        </form>
    );
}
 
export default NewBookForm;