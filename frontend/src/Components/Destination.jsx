import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import background from '../img/destinationBigImage.jpg'
import Placecards from './Placecards'

const Destination = (props) => {
    const {placename,rating} = props;
  return (
    <Fragment>
        <Header/>
            
            <section>
                
            </section>
            <section className='destinationContent'>
                <h2>Best Places to visit in {placename}</h2>
                <Placecards/>
            </section>
            <section className='weatherInfo'>
                <h2>Check out the Weather Info...</h2>
                <div className='weatherCard'>

                </div>
            </section>
        <Footer/>
    </Fragment>
  )
}

export default Destination