import React from 'react';
import "./solution.css";
import {card} from "./card";
import {IoIosRocket,IoIosLaptop} from "react-icons/io";
import {GrMoney} from "react-icons/gr"

const icons=[<IoIosRocket  /> , <IoIosLaptop /> , <GrMoney />  ]


const Solution = () => {
  return (
    <div className='solutions padding__section'>
      
      {/* --- animated icon */}
      <div className="solutions__animatedicon">
        <img src="https://tarn-react.envytheme.com/img/star-icon.png" alt="animated__img" />
        <h2>OUR SOLUTIONS </h2>
      </div>
      {/* headings ----- */}
      <div className="solutions__headings">
        <h1>We Different From Others Should Choose Us </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      {/* cards ---- */}
      <div className="solutions__cards">
        {card.map( (card) =>(
          <div key={card.id} className="solutions__cards-item">
            <span>{icons[card.id]} </span>
            <h2>{card.heading} </h2>
            <p>{card.para} </p>
            <button>View Details </button>
          </div>
        ))}
      </div>

      </div>
  )
}

export default Solution