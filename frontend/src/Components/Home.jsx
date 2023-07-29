import React, { Fragment } from 'react'
import Header from './Header';
import tourist from '../img/fort.jpg';
import "../Styles/home.css";
import {AiOutlineSearch} from "react-icons/ai";

const Home = () => {
  const formSubmission = (e) => {
    e.preventDefault();
  }
  return (
    <Fragment>
      <Header/>
      <section className='home1'>
        <div className="search">
          <form onSubmit={formSubmission}>
            <input type="text" placeholder='🔍︎ Search'/>
          </form>
        </div>
      </section>
    </Fragment>
  )
}

export default Home;