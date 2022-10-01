import React from 'react';
import "./team.css";
import {RiFacebookFill,RiTwitterFill,RiInstagramLine,RiLinkedinFill} from "react-icons/ri"

const membersInfo=[
  {id:0,
   img:'https://tarn-react.envytheme.com/img/team/team1.jpg',
   name:"Merv Adrian",
   profession:"CEO & Founder"
  },
  {
    id:1,
    img:"https://tarn-react.envytheme.com/img/team/team4.jpg",
    name:"Marie Curie",
   profession:"Support"
  },
  {id:2,
    img:'https://tarn-react.envytheme.com/img/team/team1.jpg',
    name:"Merv Adrian",
    profession:"CEO & Founder"
   },
   {
    id:3,
    img:"https://tarn-react.envytheme.com/img/team/team4.jpg",
    name:"Marie Curie",
   profession:"Support"
  },
]

const Team = () => {
  return (
    <div className='team padding__section'>
      
      {/* --- animated icon */}
      <div className="solutions__animatedicon">
        <img src="https://tarn-react.envytheme.com/img/star-icon.png" alt="animated__img" />
        <h2>TEAM MEMBERS </h2>
      </div>
      {/* headings ----- */}
      <div className="solutions__headings">
        <h1>Our Awesome Team </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      {/* img container ---- */}

      <div className="team__imgcontainer">
        {membersInfo.map( (member) =>(
          <div className='team__imgcontainer-item' key={member.id}>
            <img src={member.img} alt="img" />
            <h2>{member.name} </h2>
            <p>{member.profession} </p>

            <div className="team__imgcontainer-item__icons">
            <span><RiFacebookFill  className='team__imgcontainer-item__icons-icon'  /> </span> 
          <span><RiInstagramLine className='team__imgcontainer-item__icons-icon'  /> </span>
          <span><RiLinkedinFill  className='team__imgcontainer-item__icons-icon' /> </span>
          <span><RiTwitterFill  className='team__imgcontainer-item__icons-icon' /> </span>          
            </div>
          </div>
        ))}

      </div>
      
      </div>
  )
}

export default Team