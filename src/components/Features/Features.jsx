import React from 'react';
import "./features.css";
import {card} from "./card";

const icons=["https://tarn-react.envytheme.com/img/services/service-icon1.png",
"https://tarn-react.envytheme.com/img/services/service-icon2.png",
"https://tarn-react.envytheme.com/img/services/service-icon3.png",
"https://tarn-react.envytheme.com/img/services/service-icon4.png",
"https://tarn-react.envytheme.com/img/services/service-icon5.png",
"https://tarn-react.envytheme.com/img/services/service-icon6.png"];


const Features = () => {
  return (
    <div className='features padding__section'>
      
      {/* --- animated icon */}
      <div className="solutions__animatedicon">
        <img src="https://tarn-react.envytheme.com/img/star-icon.png" alt="animated__img" />
        <h2>OUR FEATURES </h2>
      </div>
      {/* headings ----- */}
      <div className="solutions__headings">
        <h1>We`re Here To Help </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      {/* cards ----- */}

      <div className="features__cards">
        {card.map( (card) =>(
            <div key={card.id} className="features__cards-item">
            
            <img src={icons[card.id]} alt="card-img" />

            <h2>{card.heading} </h2>
            <p>{card.para} </p>
           
          </div>  
        ))}
      </div>
      
      </div>
  )
}

export default Features