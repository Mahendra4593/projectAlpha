import React,{useState} from 'react'
import "../Styles/signup.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const history = useNavigate();

  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const submit = async(e) => {
    e.preventDefault();
    console.log(name,email,password);
    try{
      await axios.post("/api/v1/register",{
        name,email,password
      }).then((res) => {
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
        <form action='post'>
          <div>
            <h2>SIGN UP</h2>
            <div>Name</div>
            <input type="text" onChange={(e) => {
              setName(e.target.value)
            }}/>
            <div>Email</div>
            <input type="email" onChange={(e) => {
              setEmail(e.target.value)
            }}/>
            <div>Create password</div>
            <input type="password" onChange={(e) => {
              setPassword(e.target.value)
            }}/>
          </div>
          <div className='signUpButton'>
            <button type='submit' onClick={submit}>SIGN UP</button>
          </div>
        </form>
    </section>
    </main>
  )
}

export default SignUp;