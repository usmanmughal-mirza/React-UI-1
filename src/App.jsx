
import React from 'react';
import {Features,Footer,Header,Blog,Team,Testimonial,Pricing,Projects,
Navbar,
Solutions,
Services} from "./components/index";
import {GrCheckmark} from "react-icons/gr";

const todoitems =[
  {
    id:Math.random() * 20,
    heading:"Responsive Design",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"React Development",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"Apps Development",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"Laravel Development",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"UX/UI Design",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"E-commerce Design",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"Web Design",
    item: <GrCheckmark className='checkmark' />
  },
  {
    id:Math.random() * 20,
    heading:"Print Ready Design",
    item: <GrCheckmark className='checkmark' />
  },
]

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Solutions />
      <Services />
      <Services todo={todoitems}
      isServices img={"https://tarn-react.envytheme.com/img/services/service2.png"} />
      <Features />
      <Team /> 
      <Projects />
      <Pricing />
      <Blog />
      <Footer />
      </div>
  )
}

export default App