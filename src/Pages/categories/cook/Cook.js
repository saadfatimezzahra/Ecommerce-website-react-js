import React from 'react'
import Footer from '../../../Components/Footer/Footer'
import Navbar from '../../../Components/Navbar/Navbar';
const Cook = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className='products'>
      
      
       
       
      <div className='products_container'>
      <img class="products_image" src="/assets/products/teapot.png" width="250px" height="270px" alt='hello'/>
      <div className='products_title'>TEAPOT INOX SIZE 8</div>
      <div className='products_price'>308.0 dh</div>
      </div>
       
 
       
       <div className='products_container'>
       <img class="products_image" src="/assets/products/teapot_2.png" width="250px" height="270px" alt='hello'/>
       <div className='products_title'>THÉIÈRE BOULE SIMPLE PLAQUÉE</div>
       <div className='products_price'>213.0 dh</div>
       </div>

       <div className='products_container'>
       <img class="products_image" src="/assets/products/verre_de_the.png" width="250px" height="270px" alt='hello'/>
       <div className='products_title'>VERRE DE THÉ KANDIL 4 oz</div>
       <div className='products_price'>250.0 dh</div>
       </div>

       <div className='products_container'>
       <img class="products_image" src="/assets/products/verre_de_the_2.png" width="250px" height="270px" alt='hello'/>
       <div className='products_title'>FLORAL TEA CUPS 4 oz</div>
       <div className='products_price'>250.0 dh</div>
       </div>
      
       
 
       
       
       
       
     </div>  
     <Footer></Footer>
   </div>
  )
}

export default Cook