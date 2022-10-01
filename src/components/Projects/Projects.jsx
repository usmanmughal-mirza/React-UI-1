import React from 'react';
import "./projects.css";
import {BsPlusLg} from "react-icons/bs";

const cards=[
  {
    id:Math.random() * 10,
    img:"https://tarn-react.envytheme.com/img/projects/project1.jpg",
    heading:"Movie Recommendation",
    project:"System Project"
  },
  {
    id:Math.random() * 10,
    img:"https://tarn-react.envytheme.com/img/projects/project5.jpg",
    heading:"Customer Segmentation",
    project:"Machine Learning"
  },
  {
    id:Math.random() * 10,
    img:"https://tarn-react.envytheme.com/img/projects/project6.jpg",
    heading:"Data Analysis",
    project:"Web Project"
  },
  {
    id:Math.random() * 10,
    img:"https://tarn-react.envytheme.com/img/projects/project2.jpg",
    heading:"Detection Project",
    project:"Programming"
  },
  {
    id:Math.random() * 10,
    img:"https://tarn-react.envytheme.com/img/projects/project3.jpg",
    heading:"Data Scientist",
    project:"Data Science"
  },
  {
    id:Math.random() * 10,
    img:"https://tarn-react.envytheme.com/img/projects/project1.jpg",
    heading:"Benefits Research",
    project:"Science Projects"
  },
]

const Projects = () => {
  return (
    <div className='projects padding__section'>
      
      {/* --- animated icon */}
      <div className="solutions__animatedicon">
        <img src="https://tarn-react.envytheme.com/img/star-icon.png" alt="animated__img" />
        <h2>RECENT PROJECTS </h2>
      </div>
      {/* headings ----- */}
      <div className="solutions__headings">
        <h1 style={{color:"white"}}>Check Some Of Our Recent Work </h1>
        <p style={{color:"white"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

            {/* cards ----- */}

            <div className="projects__cards">
        {cards.map( (card) =>(
            <div key={card.id} className="projects__cards-item">
              <div className="projects__cards-item-img">
              <img src={card.img} alt="card-img" />
               <div className="projects__cards-item-img__wrapper">
                <span> <BsPlusLg  /> </span>
               </div>
              </div>
           

            <h2>{card.heading} </h2>
            <p>{card.project} </p>
           
          </div>  
        ))}
      </div>


      
      </div>
  )
}

export default Projects