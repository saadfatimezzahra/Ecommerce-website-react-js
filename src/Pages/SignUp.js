import React from 'react'
import "../Styles/Signup.css" ;
import '../Components/Navbar/Navbar'
import '../Components/Footer/Footer'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
const SignUp = () => {
  return (
    <div>
    <Navbar />
    <div className="signup-container">
      <div className='container'>
        <h3>Create your account</h3>
        <form>
        <input type="text" placeholder='enter your email' className='value' required></input>
        <input type="text" placeholder='enter your password' className='value' required></input>
        <input type="text" placeholder='confirm your password' className='value' required></input><br></br>
        <input type="submit" value="submit" className='send'></input>
        </form>
      </div>
      
    </div>
    <Footer />
    </div>
  )
}

export default SignUp
