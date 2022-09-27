import React from 'react';
import "./header.css";
import Navbar from '../Navbar/Navbar';
import {BsArrowRight} from "react-icons/bs"

const Header = () => {
  return (
    <>
    <section className="header">
     <Navbar /> 

     <div className="header__section padding__section">
      
      {/* first div--  */}
      
      <div className="header__section__content">
        <h1>Secure IT Solutions Services </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

        <button>  Get Started
          <span ><BsArrowRight className='arrowright' /> </span>
        </button>
      
      </div>
      
      {/* second div -- */}
      
      <div className="header__section__img">
      <img src="https://tarn-react.envytheme.com/img/banner-img1.png" alt="header-img" />
      </div>

     </div>

    </section>
   
   {/*  */}
    
    </>
  )
}

export default Header