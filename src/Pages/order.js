import React from 'react'
import HorizontalLinearAlternativeLabelStepper from "../Components/Stepper/Stepper"
import "../Styles/Order.css"
import '../Components/Navbar/Navbar'
import '../Components/Footer/Footer'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
const Order = () => {
  return (
    <div>
    <Navbar />
    <div className='body'>
      <div className='box'>
      <div className='order_box'>
        <HorizontalLinearAlternativeLabelStepper />
        </div> 
      </div>
      
    </div>
    <Footer />
    </div>
  )
}

export default Order
