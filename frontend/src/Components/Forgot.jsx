import React,{useState} from 'react'
import "../Styles/forgot.css"
import axios from 'axios';


const Forgot = () => {
  const[email,setEmail] = useState('');

  const submit = async(e) => {
    e.preventDefault();
    console.log(email);
    try{
      await axios.post("/api/v1/forgot",{
        email
      }).then((res) => {
        //toast
      }).catch((err)=>{
         const error = err.response ? err.response.data.message : err.message;
      })


    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <main className='forgotmain'>
      <section>
        <form>
          <div>
            <h2>FORGOT PASSWORD</h2>
            <div>Enter Your Email Id</div>
            <input type="email" onChange={(e) => {
              setEmail(e.target.value)
            }}/>
          </div>
          <div className='forgotButton'>
            <button type='submit' onClick={submit}>Send Email</button>
          </div>
        </form>
    </section>
    </main>
  )
}

export default Forgot