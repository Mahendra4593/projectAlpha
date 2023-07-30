import React,{useState} from 'react'
import {FaSearch} from "react-icons/fa";
import "../Styles/searchbar.css";

const SearchBar = (keyword,setKeyword) => {

    const searchSubmitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <form className='input-wrapper' onSubmit={searchSubmitHandler}>
        <FaSearch id='search-icon'/>
        <input type="text" id='searchBarInput' placeholder='Search' onChange={(e) => {
            setKeyword(e.target.value)
        }}/>
    </form>
  )
}

export default SearchBar