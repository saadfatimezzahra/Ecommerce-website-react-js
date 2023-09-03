import React from 'react';
import {Link} from 'react-router-dom';
import "./Footer.css";
import {FaYoutube , FaFacebook , FaInstagram , FaEnvelope , FaPhone} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='footer'>
        
            <div className='row'>
                <div className='footer-column'>
                    <h4>Contact</h4>
                    <ul>
                    
                    <Link to="https://www.facebook.com/TUYYA/" className='terms'>
                    <li><FaFacebook className='facebook'></FaFacebook>  tuyya</li>
                    </Link>
                    <Link to="https://www.instagram.com/tuyyaofficial/" className='terms'>
                    <li><FaInstagram className='instagram'></FaInstagram>  tuyyaofficiel</li>
                    </Link>
                    
                    <li><FaPhone className='phone'></FaPhone>  +514 384 1111</li>
                    
                    
                    <li><FaEnvelope className='mail'></FaEnvelope>  love@tuyya.com</li>
                    </ul>

                </div>
                <div className='footer-column'>
                    <h4>About us</h4>
                    <ul>
                    <Link to="/about us" className='terms'>
                    <li>about us</li>
                    </Link>
                    <Link to="/terms&conditions" className='terms'>
                    <li>terms & conditions</li>
                    </Link>
                    <Link to="/terms of services" className='terms'>
                    <li>terms of services</li>
                    </Link>
                    <Link to="/return policy" className='terms'>
                    <li>return policy</li>
                    </Link>
                    <Link to="/refund policy" className='terms'>
                    <li>refund policy</li>
                    </Link>
                    </ul>

                </div>
                <div className='footer-column-last '>
                    <h4>Newsletter sign up</h4>
                    <ul>
                        <li className='terms_'>Sign up for our e-mail and be the first who know our special offers!</li>
                        <li className='newsletter'><input type="text" placeholder='enter your email' className='email'></input><input type="submit" value="submit" className='submit'></input></li>

                    </ul>
                    

                </div>
            </div>
        
        <div className='copyright'>
            <h5>© tuyya 2021. All Rights Reserved</h5>
        </div>

    </footer>
  )
}

export default Footer
