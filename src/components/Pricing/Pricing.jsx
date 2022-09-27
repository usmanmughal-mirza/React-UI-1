import React from 'react';
import "./pricing.css";
import {RiCheckboxCircleLine} from "react-icons/ri"

const tbody=[

  {name:"Number of features",bPlane:6,aPlane:7,ePlane:8},
  {name:"5 GB Bandwidth",bPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,aPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,ePlane:<RiCheckboxCircleLine className='pricing-plane-icon' />},
  {name:"Highest Speed",bPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,aPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,ePlane:<RiCheckboxCircleLine className='pricing-plane-icon' />},
  {name:"1 GB Storage",bPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,aPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,ePlane:<RiCheckboxCircleLine className='pricing-plane-icon' />},
  {name:"Unlimited Website",bPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,aPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,ePlane:<RiCheckboxCircleLine className='pricing-plane-icon' />},
  {name:"Unlimited Users",bPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,aPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,ePlane:<RiCheckboxCircleLine className='pricing-plane-icon' />},
  {name:"24x7 Great Support",bPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,aPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,ePlane:<RiCheckboxCircleLine className='pricing-plane-icon' />},
  {name:"Data Security and Backups",bPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,aPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,ePlane:<RiCheckboxCircleLine className='pricing-plane-icon' />},
  {name:"Monthly Reports and Analytics",bPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,aPlane:<RiCheckboxCircleLine className='pricing-plane-icon' />,ePlane:<RiCheckboxCircleLine className='pricing-plane-icon' />},
  {bPlane:<button className="pricing-plane-btn">Get it now</button>,aPlane:<button className='pricing-plane-btn'>Get it now</button>,ePlane:<button className='pricing-plane-btn'>Get it now</button>  }

]

const Pricing = () => {
  return (
    <div className='pricing padding__section'>
      
        {/* --- animated icon */}
        <div className="solutions__animatedicon">
        <img src="https://tarn-react.envytheme.com/img/star-icon.png" alt="animated__img" />
        <h2>PRICING </h2>
      </div>
      {/* headings ----- */}
      <div className="solutions__headings">
        <h1>Pricing Plans </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>
      {/* ------ */}

      {/* TABLE ---- */}
      <div className='usman'>
        <table className="pricing__table">

          {/* table head ----  */}

          <thead>
            <tr>
              <th> </th>

              <th>
              <span>$15.0</span>
              <span>Basic Plane</span>
              <span>/Monthly</span>
              </th>

              <th>
              <span>$35.0</span>
              <span>ADVANCNE Plane</span>
              <span>/Monthly</span>
              </th>

              <th>
              <span>$65.0</span>
              <span>Expert Plane</span>
              <span>/Monthly</span>
              </th>
            </tr>
          </thead>
          {/* ----- */}
          <tbody>
            {tbody.map( (data,index) =>(
              <>
              <tr key={index}>
              <td>{data.name} </td>
              <td>{data.bPlane} </td>
              <td>{data.aPlane} </td>
              <td>{data.ePlane} </td>
            </tr>
              </>
            ))}
           
          </tbody>

        </table>

      </div>

      {/* ----- */}

      </div>
  )
}

export default Pricing