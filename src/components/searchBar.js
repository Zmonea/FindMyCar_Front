import React, { useState, useEffect } from 'react';
import axios from 'axios';



const SearchBar = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:3000/cars')
            .then((response) => {
                setTerm(response.data)
            })
    }, [])

    

    
    return (
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Cars</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Cars"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>

    );

}

export default SearchBar;