import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Header>
        <h1>Trip Planner Pro</h1>
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Log in</Link>
            <Link to={"/signup"}>Sign up</Link>
        </nav>
    </Header>
  );
}

export default Header;