import React from 'react';
import "./services.css";
import {GrCheckmark} from "react-icons/gr";

const todoitems =[
  {
    id:Math.random() * 20,
    heading:"Cloud Databases",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"Website Hosting",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"File Storage",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"Forex Trading",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"File Backups",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"Remote Desktop",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"Email Servers",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"Hybrid Clouds",
    item: <GrCheckmark className='checkmark' />
  },
]

const Services = ({ isServices,img ,todo }) => {
  return (
    <div className='services'> 
    
    {/* img div  -- */}
     <div className="services__imgcontainer">
      <img alt="img"
       src={isServices ? img:"https://tarn-react.envytheme.com/img/services/service1.png"  }
       />
     </div>

     {/* content div ---- */}
     <div className="services__contentcontainer">

       {/* --- animated icon */}
       <div className="solutions__animatedicon">
        <img src="https://tarn-react.envytheme.com/img/star-icon.png" alt="animated__img" />
        <h2>SERVICES </h2>
      </div>
      
        {/* headings ----- */}
        <div className="solutions__headings">
        <h1>We Different From Others Should Choose Us </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      <div className="services__todolist">
        {isServices ? (
          <>
           {todo?.map( (item) =>(
             <div className="services__todolist-item" key={item.id}>
             <span> {item.item} </span>
             <h2>{item.heading} </h2>
           </div>
          ))}
          </>
        ):(
          <>
          {todoitems.map( (item) =>(
             <div className="services__todolist-item" key={item.id}>
             <span> {item.item} </span>
             <h2>{item.heading} </h2>
           </div>
          ))}
          
          </>
        )}

        {/* <div >
          <span>
            
              </span>
          <h2>Cloud Databases </h2>
        </div> */}

       

        {/* <div className="services__todolist-item">
          <span> <GrCheckmark className='checkmark' /> </span>
          <h2>File Storage </h2>
        </div> */}

        {/* <div className="services__todolist-item">
          <span> <GrCheckmark className='checkmark'/> </span>
          <h2>Forex Trading </h2>
        </div> */}

        {/* <div className="services__todolist-item">
          <span> <GrCheckmark className='checkmark' /> </span>
          <h2>File Backups </h2>
        </div> */}


        {/* <div className="services__todolist-item">
          <span> <GrCheckmark className='checkmark' /> </span>
          <h2>Remote Desktop </h2>
        </div> */}

        {/* <div className="services__todolist-item">
          <span> <GrCheckmark className='checkmark' /> </span>
          <h2>Email Servers </h2>
        </div> */}

        {/* <div className="services__todolist-item">
          <span> <GrCheckmark className='checkmark'/> </span>
          <h2>Hybrid Cloud </h2>
        </div> */}

      </div>

     </div>
    </div>
  )
}

export default Services