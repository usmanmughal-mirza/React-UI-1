
import React, { useRef, useState } from 'react';
import "./navbar.css";
import {RiCloseLine,RiMenuLine,RiSearchLine,RiArrowDownSLine} from "react-icons/ri";
import {BsArrowRight} from "react-icons/bs";
import Dropdown from "./Dropdown/Dropdown";

// dropdown disappears urgently because you write code that when we leave
// li then dropdown disappear. onMouseLeave() .. so you should increase 
// padding(height) of li and dropdown should be near to li so when we 
// leave li before disappearing of dropdown we must catch him . 

const Navbar = () => {
  const [click,setClick]=useState(false);
  const [dropdown,setDropdown]=useState(false);
  const inputRef=useRef();


  const handleClick =() =>setClick( (preState)=> !preState );

  const handleInput =() =>{
    // console.log(inputRef);
    inputRef.current.attributes[1].nodeValue="";
  }

  const onMouseEnter =() =>{
    if(window.innerWidth < 951 ){
      setDropdown(false)
    }
    else {
      setDropdown(true)
    }
  }
  const onMouseLeave =() =>{
    if(window.innerWidth < 951 ){
      setDropdown(false)
    }
    else{
      setDropdown(false)
    }
  }

  return (
    <section className='navbar'>

      {/* logo ---------------------- */}
      <div className="navbar__logo">
        <img src="https://tarn-react.envytheme.com/img/logo.png" alt="nav__logo" />
      </div>

      {/* mobile menu icon ----only show in mobile  */}

      <div className="navbar__menuicon" onClick={handleClick}>
        <span> {click ? <RiCloseLine /> :<RiMenuLine /> } </span>
      </div>

      {/* Menu -- ------------------------------------ */}
      <ul className={click ?"navbar__menu active":"navbar__menu" }>
       {/* dropdown ---- */}
        <li className='navbar__menu-item' 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
          <a href="#" className='navbar__menu-item__link'>Home
          <span  > 
            <RiArrowDownSLine className='navbar__menu-arrowdown' />
             </span>
           </a>
           {dropdown && <Dropdown />}
        </li>

        {/* ----*/}
        <li className='navbar__menu-item'>
          <a href="#" className='navbar__menu-item__link'>About Us
        
           </a>
        </li>

        <li className='navbar__menu-item'>
          <a href="#" className='navbar__menu-item__link'>Services
           </a>
        </li>

        <li className='navbar__menu-item'>
          <a href="#" className='navbar__menu-item__link'>Case Studies
           </a>
        </li>

        <li className='navbar__menu-item'>
          <a href="#" className='navbar__menu-item__link'>Pages
           </a>
        </li>

        <li className='navbar__menu-item'>
          <a href="#" className='navbar__menu-item__link'>Blog
      
           </a>
        </li>

        {/* actions -- input and button */}
        <div className="navbar__menu-item__action">
          {/* search input --- */}
          <div className="navbar__menu-item__action-input">
            <input type="text" placeholder='Search for anything'
            ref={inputRef} onClick={handleInput}  />
            <span><RiSearchLine className='navbar-searchicon' /> </span>
          </div>
          {/* ---- */}
          <button>  Get Started
          <span ><BsArrowRight className='arrowright' /> </span>
        </button>
        </div>
        {/* --- */}
      </ul>
      {/* ------------------------ */}

      {/* --- */}
      </section>
  )
}

export default Navbar