import React from 'react'
import "../Styles/signup.css";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <main>
      <section>
        <form>
          <div>
            <h2>LOGIN</h2>
            <div>Name</div>
            <input type="text"/>
            <div>Email</div>
            <input type="text"/>
            <div>Password</div>
            <input type="text"/>
          </div>
          <div className='loginButton'>LOGIN</div>
          <div className='forgot'><Link to="./Forgot">Forgot Password?</Link></div>
          <div className='signupcustom'> Need an account? <Link to="./SignUp">SIGN UP</Link></div>
        </form>
    </section>
    </main>
  )
}

export default SignUp;