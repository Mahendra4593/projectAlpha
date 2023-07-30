import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/header.css";
import logo from "../img/logo.jpg";

const Header = () => {
  return (
    <header>
      <div className='siteLogoName'>
        <img src={logo} alt="img" title='Trip Planner Pro' width={200} height={200}/>
        <h1>Trip Planner Pro</h1>
      </div>
        <nav>
            <Link to={"./"}>Home</Link>
            <Link to={"./Login"}>Log in</Link>
            <Link to={"./Signup"}>Sign up</Link>
        </nav>
    </header>
  )
}

export default Header