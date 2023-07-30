import React from 'react'
import demo from '../img/demoImage.jpeg'
import "../Styles/placecards.css"
import { Link, useNavigate } from 'react-router-dom'

const Placecards = (props) => {
  const {id,image,placename,rating} = props;
  const history = useNavigate();
  const toDestinationPage = () => {
    history(`/${id}`);
  }

  return (
    <section className='card' style={{
      backgroundImage: `url(${demo})`,
      backgroundSize: "cover"
    }} onClick={() => {
      toDestinationPage(id);
    }}>
        <div className="cardInfo">
            <h3>demoName</h3>
            <p>Rated:- fakeRating/10</p>
        </div>
    </section>
  )
}

export default Placecards