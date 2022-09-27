import React from 'react';
import "./blog.css";

const cards=[
  {
    id:Math.random() * 10,
    date:"April 30,2020",
    name:"Alex Morgan",
    peopleimg:"https://tarn-react.envytheme.com/img/user1.jpg",
    img:"https://tarn-react.envytheme.com/img/blog/blog-img1.jpg",
    heading:"Six Ways to Make Smarter Decisions",
    
  },
  {
    id:Math.random() * 10,
    date:"April 30,2020",
    name:"Alex Morgan",
    peopleimg:"https://tarn-react.envytheme.com/img/user3.jpg",
    img:"https://tarn-react.envytheme.com/img/projects/project5.jpg",
    heading:"Customer Segmentation",
    project:"Machine Learning"
  },
  {
    id:Math.random() * 10,
    date:"April 30,2020",
    name:"Alex Morgan",
    peopleimg:"https://tarn-react.envytheme.com/img/user1.jpg",
    img:"https://tarn-react.envytheme.com/img/blog/blog-img6.jpg",
    heading:"Data Analysis",
    project:"Web Project"
  },
]

const Blog = () => {
  return (  
    <div className='blog padding__section'>

      {/* --- animated icon */}
      <div className="solutions__animatedicon">
        <img src="https://tarn-react.envytheme.com/img/star-icon.png" alt="animated__img" />
        <h2>OUR BLOG </h2>
      </div>
      
        {/* headings ----- */}
        <div className="solutions__headings">
        <h1>Latest Valuable Insights</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      {/* ---- */}

         {/* cards ----- */}

       <div className="blog__cards">
        {cards.map( (card) =>(
            <div key={card.id} className="blog__cards-item">
            
            <img src={card.img} alt="card-img" />
            {/* people info  */}
            <div className="blog__cards-item__peopleinfo">
              <div style={{display:"flex",alignItems:"center"}}>
                <img src={card.peopleimg} alt="people-img" />
                <p>{card.name} </p>
              </div>
              <div>
                <p>{card.date} </p>
              </div>
            </div>
            {/* --- */}
            <h2>{card.heading} </h2>
           
           
          </div>  
        ))}
      </div>
      {/* --- */}

      </div>
  )
}

export default Blog