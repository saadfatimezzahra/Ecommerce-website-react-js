
import React from 'react'
import "../Stepper/First_Section.css"
const FirstSection = () => {
  return (
    <div className='first_section'>
      <form>
        <h5>Contact</h5>
        <input type='text' placeholder='email or phone number'  className='information' required></input>
        <h5>Delivery Method</h5>
        <div  className='information'>
        <input type="radio" name="radioGroupName" value="Ship"   id="radioId" />
        <label for="shipRadio">Ship </label>
        </div>
        <div  className='information'>
        <input type="radio" name="radioGroupName" value="Pick up" placeholder='Pick up'  id="radioId"></input>
        <label for="shipRadio">Pick up</label>
        </div>
        
        <h5>Shipping Adress</h5>
        <select id="countrySelect" name="country" placeholder='country/region' className='information'>
  <option value="USA">United States of America</option>
  <option value="Canada">Canada</option>
  <option value="UK">United Kingdom</option>
  <option value="Germany">Germany</option>
  
</select>
        <input type='text' placeholder='firstname'className='information' required></input>
        <input type='text' placeholder='lastname' className='information' required></input>
        <input type='text' placeholder='address'className='information' required></input>
        <input type='text' placeholder='apartment,suite,ect.'className='information' required></input>
        <input type='text' placeholder='postal code' className='information' required></input>
        <input type='text' placeholder='city' className='information' required></input>
      </form>
    </div>
  )
}

export default FirstSection
