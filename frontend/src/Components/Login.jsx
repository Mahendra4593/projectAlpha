import React, { useState } from 'react'
import "../Styles/login.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

  const history = useNavigate();

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const submit = async(e) => {
    e.preventDefault();

    try{

      await axios.post("/api/v1/login",{
        email,password
      })
      .then((res) => {
        history("/");
      }).catch((err)=>{
         const error = err.response ? err.response.data.message : err.message;
      })

    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <main>
      <section>
        <form action='post' onSubmit={submit}>
          <div>
            <h2>LOGIN</h2>
            <div>Email</div>
            <input type="email" onChange={(e) => {
              setEmail(e.target.value)
            }}/>
            <div>Password</div>
            <input type="password" onChange={(e) => {
              setPassword(e.target.value)
            }}/>
          </div>
          <div className='loginButton'>
            <button type='submit' onClick={submit}>LOGIN</button>
          </div>
          <div className='forgot'><Link to="./Forgot">Forgot Password?</Link></div>
          <div className='signupcustom'> Need an account? <Link to="./SignUp">SIGN UP</Link></div>
        </form>
    </section>
    </main>
  )
}

export default Login;