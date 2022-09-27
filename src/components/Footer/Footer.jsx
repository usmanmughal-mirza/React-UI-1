
import React from 'react';
import "./footer.css";
import {RiFacebookFill,RiTwitterFill,RiInstagramLine,RiLinkedinFill} from "react-icons/ri"

const Footer = () => {
  return (
    <div className='footer padding__section'>
      {/* first ---- */}
      <div className="footer-first">
        <img src="https://tarn-react.envytheme.com/img/logo.png" alt="logo" />
        <p>
        Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.
        </p>
        <div className="footer-first__icons">
          <span><RiFacebookFill  className='footer-first__icons-icon'  /> </span> 
          <span><RiInstagramLine className='footer-first__icons-icon'  /> </span>
          <span><RiLinkedinFill  className='footer-first__icons-icon' /> </span>
          <span><RiTwitterFill   className='footer-first__icons-icon' /> </span>          
        </div>
      </div>
      {/* second ---- */}
      <div className="footer-second">
        <h2>Explore </h2>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Case Studies</li>
          <li>Our Blog</li>
          <li>Contact</li>

        </ul>
      </div>
      {/* third ---- */}
      <div className="footer-third">
        
      <h2>Resources </h2>

      <ul>
       <li>Our Scientists</li>
       <li>Our Services</li>
       <li>Testimonials</li>
       <li>SaaS Solutions</li>
       <li>Case Studies</li>
  
      </ul>

      </div>
      {/* fourth -- */}
      <div className="footer-fourth">
      <h2> Address </h2>

      <ul>
       <li>175 5th Ave, New York, NY 10010,
        United States</li>
       <li>+1 (123) 456 7890</li>
       <li>hello@tarn.com</li>
       <li> +55 785 4578964</li>
     
  
      </ul>
      </div>

      {/* -- */}
      </div>
  )
}

export default Footer