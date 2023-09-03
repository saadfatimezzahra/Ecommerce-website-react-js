import React from 'react'
import Footer from '../../../Components/Footer/Footer'
import Navbar from '../../../Components/Navbar/Navbar';
const Skincare = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className='products'>
      
      
       
       
       <div className='products_container'>
       <img class="products_image" src="/assets/products/ovo_black_soap_skincare.png" width="250px" height="270px" alt='hello'/>
       <div className='products_title'>OVO Skincare Argan Moroccan Black Soap | 100ml</div>
       <div className='products_price'>77.0 dh</div>
       </div>
       
 
       
       <div className='products_container'>
       <img class="products_image" src="/assets/products/ovo_skincare.png" width="250px" height="270px" alt='hello'/>
       <div className='products_title'>TEAPOT INOX SIZE 8</div>
       <div className='products_price'>308.0 dh</div>
       </div>
      
       
 
       
       
       
       
     </div>  
     <Footer></Footer>
   </div>
    
  )
}

export default Skincare
