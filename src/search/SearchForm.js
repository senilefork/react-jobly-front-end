import React, { useState } from "react";
import './SearchForm.css'
const SearchForm = ({ search, placeHolderText }) =>{

    const [searchWord, setSearchWord] = useState("");

    const handleChange = e =>{
        setSearchWord(e.target.value) 
    }

    const handleSubmit = e =>{
        e.preventDefault();
        search(searchWord);
    }

    return(
        <div>
          <form className="search-form" onSubmit={handleSubmit}>
            <input 
             type="text" 
             name="searchWord"
             placeholder={placeHolderText}
             value={searchWord}
             onChange={handleChange} />
             <button className="search-button">Search</button>
          </form>
        </div>
    )
}

export default SearchForm;