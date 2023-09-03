import React from 'react'
import Footer from '../../../Components/Footer/Footer'
import Navbar from '../../../Components/Navbar/Navbar';
const Gourmet = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className='products'>
      
      
       
       
       <div className='products_container'>
       <img class="products_image" src="/assets/products/argan_oil.png" width="250px" height="270px" alt='hello'/>
       <div className='products_title'>Virgin Organic Roasted Argan Oil</div>
       <div className='products_price'>216.0 dh</div>
       </div>
       
 
       
       <div className='products_container'>
       <img class="products_image" src="/assets/products/zafraan.png" width="250px" height="270px" alt='hello'/>
       <div className='products_title'>Pure Organic Taliouine Saffron</div>
       <div className='products_price'>145.0 dh</div>
       </div>
      
       
 
       
       
       
       
     </div>  
     <Footer></Footer>
   </div>
    
  )
}

export default Gourmet