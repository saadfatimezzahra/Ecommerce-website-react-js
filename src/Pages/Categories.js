import React from 'react'
import {Link} from 'react-router-dom'
import '../Components/Navbar/Navbar'
import '../Components/Footer/Footer'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
const Categories = () => {
  return (
    <div>
      <Navbar />
      <h3>Cook & Serve</h3>
    <div className='products'>
      
     <Link to="/product_details" >
      <div className='products_container'>
      <img class="products_image" src="/assets/the.jpeg" width="250px" height="270px" alt='hello'/>
      <div className='products_title'>Colored henna  tea  glass</div>
      <div className='products_price'>186.0 dh</div>
      </div>
      </Link>
      
      
      <div className='products_container'>
      <img class="products_image" src="/assets/products/teapot.png" width="250px" height="270px" alt='hello'/>
      <div className='products_title'>TEAPOT INOX SIZE 8</div>
      <div className='products_price'>308.0 dh</div>
      </div>
      

      
      <div className='products_container'>
      <img class="products_image" src="/assets/products/teapot_2.png" width="250px" height="270px" alt='hello'/>
      <div className='products_title'>TEAPOT INOX SIZE 8</div>
      <div className='products_price'>308.0 dh</div>
      </div>
      
      <div className='products_container'>
      <img class="products_image" src="/assets/products/verre_de_the.png" width="250px" height="270px" alt='hello'/>
      <div className='products_title'>TEAPOT INOX SIZE 8</div>
      <div className='products_price'>308.0 dh</div>
      </div>

      <div className='products_container'>
      <img class="products_image" src="/assets/products/verre_de_the_2.png" width="250px" height="270px" alt='hello'/>
      <div className='products_title'>TEAPOT INOX SIZE 8</div>
      <div className='products_price'>308.0 dh</div>
      </div>

      
      
    </div> 


    <h3>Skincare</h3>
    <div className='products'>
      
    <div className='products_container'>
      <img class="products_image" src="/assets/products/ovo_black_soap_skincare.png" width="250px" height="270px" alt='hello'/>
      <div className='products_title'>OVO Skincare Argan Moroccan Black Soap | 100ml</div>
      <div className='products_price'>77.0 dh</div>
      </div>
      
      
      <div className='products_container'>
      <img class="products_image" src="/assets/products/ovo_black_soap_skincare.png" width="250px" height="270px" alt='hello'/>
      <div className='products_title'>OVO Skincare Argan Moroccan Black Soap | 100ml</div>
      <div className='products_price'>77.0 dh</div>
      </div>

      
      

      
      
    </div> 


    <h3>Decoration</h3>
    <div className='products'>
      
     

      

      <div className='products_container'>
      <img class="products_image" src="/assets/the.jpeg" width="250px" height="270px" alt='hello'/>
      <div className='products_title'>Colored henna  tea  glass</div>
      <div className='products_price'>186.0 dh</div>
      </div>

      
    </div> 
    <Footer />
    </div>
  )
}

export default Categories
