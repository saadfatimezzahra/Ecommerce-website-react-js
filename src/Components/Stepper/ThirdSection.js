import React from 'react'
import '../Stepper/First_Section.css'
const ThirdSection = () => {
  return (
    <div className='third_section'>
      <h4>Payment</h4>
      <p>All transactions are secure and encrypted.</p>
      
      <form>
      <h4>Credit Card</h4>
      <input type='password' placeholder='card number'  className='information' required></input>
      <input type='password' placeholder='name on card'  className='information' required></input>
      <input type='text' placeholder='expiration date(MM/YY)'  className='information' required></input>
      <input type='text' placeholder='security code'  className='information' required></input>
      <h4>Billing Address</h4>
      <div  className='information'>
        <input type="radio" name="radioGroupName" value="Ship"   id="radioId" />
        <label for="shipRadio">Same as shipping address </label>
        </div>
        <div  className='information'>
        <input type="radio" name="radioGroupName" value="Pick up" placeholder='Pick up'  id="radioId"></input>
        <label for="shipRadio">Use different billing address</label>
        </div>
      </form>
    </div>
  )
}

export default ThirdSection
