import React from 'react'
import "../Stepper/Second_Section.css"
const SecondSection = () => {
  return (
    <div className='second_section'>
      <form>
        <h4>Shipping Method</h4>
        <div  className='ship_information'>
        <input type="radio" name="radioGroupName" value="Ship"   id="radioId" />
        <label for="shipRadio">Canada Post International Parcel Surface </label>
        <div><label for="shipRadio">20 to 60 business days </label></div>
        </div>
        <div  className='ship_information'>
        <input type="radio" name="radioGroupName" value="Pick up" placeholder='Pick up'  id="radioId"></input>
        <label for="pickupRadio">Canada Post Xpresspost International </label>
        <div><label for="shipRadio">13 business days</label></div>
        </div>
      </form>
    </div>
  )
}

export default SecondSection
