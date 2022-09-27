import React, { useState } from 'react';
import "./dropdown.css";
import {MenuItems} from "./dropdownItems";

// when user click on dropdown menu it should disappear and navigate  
// user to another page 

const Dropdown = () => {
  const [click,setClick]=useState(false);

  const handleClick=() =>setClick( (preState) => !preState );

  return (
    <ul className={click ? 'navbar__dropdown clicked':'navbar__dropdown'} 
    onClick={handleClick}
    >
      {MenuItems.map( (item,index) =>(
        <li key={index}>
          <a className={item.cName} 
          onClick={() =>setClick(false) }
          href="#">{item.title} </a>
        </li>
      ) )}
      </ul>
  )
}

export default Dropdown