import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/header.css";

const Header = () => {
  return (
    <header>
        <h1>Trip Planner Pro</h1>
        <nav>
            <Link to={"./"}>Home</Link>
            <Link to={"./Login"}>Log in</Link>
            <Link to={"./Signup"}>Sign up</Link>
        </nav>
    </header>
  )
}

export default Header