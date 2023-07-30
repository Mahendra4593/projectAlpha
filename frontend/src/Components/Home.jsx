import React, { Fragment, useEffect, useState } from 'react'
import Header from './Header';
import "../Styles/home.css";
import Footer from './Footer';
import SearchBar from './SearchBar';
import {useParams} from "react-router-dom"
import axios from "axios";
import Placecards from './Placecards';

const Home = () => {
  const {id} = useParams();
  const[keyword, setKeyword] = useState("");
  const formSubmission = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    axios.get(`/api/v1/destination/${id}`).then((res) => {
      console.log(res);
    }).catch((err) => {
      
    })
  },[])
  return (
    <Fragment>
      <div className="homepage">
        <Header/>
          <section className='home1'>
            <div className="search-bar-container">
              <SearchBar keyword = {keyword} setKeyword = {setKeyword}/>
              <div className="searchResults">SearchResults</div>
            </div>
          </section>
          <section className="home2">
            <Placecards/>
          </section>
        <Footer/>
      </div>
    </Fragment>
  )
}

export default Home;