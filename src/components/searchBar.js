import React, { useState, useEffect } from 'react';
import axios from 'axios';



const SearchBar = () => {
    const [term, setTerm] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios
            .get('https://findmycar-back.onrender.com/cars')
            .then((response) => {
                setTerm(response.data)
            })
    }, [])

    

    
    return (
        <form action="/" method="get" id="header-searchForm">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Cars</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Cars"
            onInput={e => setSearchTerm(e.target.value)}
            name="s" 
            value={searchTerm}
        />
        <button type="submit">Search</button>
    </form>

    );

}

export default SearchBar;