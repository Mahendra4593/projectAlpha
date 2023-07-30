import React from 'react'
import logo from "../img/logo.jpg"
import {AiFillYoutube,AiFillTwitterCircle,AiFillInstagram,AiFillFacebook} from "react-icons/ai"
import "../Styles/footer.css";

const Footer = () => {
  return (
    <footer className='foot'>
        {/* <section className='foot1'>
            <h2>About Trip Planner Pro</h2>
            <p>Trip Planner Pro, the world's largest travel platform*, helps 100 million travelers each month** make every trip their best trip. Travelers across the globe use the Trip Planner Pro site and app to browse more than 500 million reviews</p>
        </section> */}
        <section className='foot2'>
            <div className='foot2copy'>
                <img src={logo} alt="img" title='Trip Planner Pro' width={200} height={200}/>
                <p>&copy; 2023 Trip Planner Pro All Rights Reserved.</p>
            </div>
            <div className="footIcons">
                <AiFillYoutube/>
                <AiFillTwitterCircle/>
                <AiFillInstagram/>
                <AiFillFacebook/>
            </div>

        </section>
    </footer>
  )
}

export default Footer