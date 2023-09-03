import React from 'react'
import "../Styles/product_details.css"
import '../Components/Navbar/Navbar'
import '../Components/Footer/Footer'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
const ProductDetails = () => {
  return (
    <div>
      <Navbar />
    <div className='body'>
       <div className='product_details_section'>
        <div className='product_details_subtitles'>Product details</div>
          <div className='product_details_row'>
            <div className='product_details_image'>
            <img class="product_image" src="/assets/the.jpeg" width="400px" height="350px" alt='hello'/>

            </div>
            <div className='product_elements'>
                <h3 className='product_title'>Colored henna  tea  glass</h3>
                <div className='product_price'>186.0 DH</div>
                <div><button className='add_to_cart'>Add to cart</button> </div>
                <div><button className='add_to_favorites'>Add to favorites</button></div>
                <h6>Pass to the Checkout & pay with <strong > ShopPay</strong> </h6>
                <div><button className='buy_shopay'>Buy with ShopPay</button></div>

            </div>

          </div> 
          <div className='product_description'>
            <div className='product_details_subtitles'>Description</div>
            <p className='product_description_text'>
            Moroccan tea a staple of Moroccan lifestyle. The tea ceremony is one of the most important aspects
 of Moroccan hospitality as there is no pre-requisite as to whom you serve tea. Sold in a set of 6 or 12 
glasses and come in different patterns and colors. Start your own TUYYA collection of Moroccan tea
 glasses today. Most homes own many different designs and not by choice. The end collection is an
 incredible assortment of beautiful colors and designs. Elément incontournable de la dégustation du
 thé à la menthe au Maghreb, le verre à thè marocain est souvent très coloré pour rappeler la joie et la
 convivialité de la tradition du thé marocain. Vendus en lot de 6 ou 12 verres. Commencez votre
 propre collection de verres de thé marocain. Les verres à thé marocain proposés par TUYYA viennent
 sous plusieurs designs et coloris ( rouge, bleu, vert, blanc, or et argent…). Une excellente idée cadeau
 
<div >Volume per glass 5 oz.</div>
<div >set of 6 cups</div>
            </p>

          </div>

        </div> 

        <h3>See Other Products</h3>
    <div className='products'>
    <div className='products_container'>
      <img class="products_image" src="/assets/products/ovo_black_soap_skincare.png" width="250px" height="270px" alt='hello'/>
      <div className='products_title'>OVO Skincare Argan Moroccan Black Soap | 100ml</div>
      <div className='products_price'>77.0 dh</div>
      </div>
      

      
      <div className='products_container'>
      <img class="products_image" src="/assets/products/teapot.png" width="250px" height="270px" alt='hello'/>
      <div className='products_title'>TEAPOT INOX SIZE 8</div>
      <div className='products_price'>308.0 dh</div>
      </div>
     
      

      
      
      <div className='products_container'>
      <img class="products_image" src="/assets/products/argan_oil.png" width="250px" height="270px" alt='hello'/>
      <div className='products_title'> Virgin Organic Roasted Argan Oil</div>
      <div className='products_price'>216.0 dh</div>
      </div>

      

      

      
    </div> 
      
    </div>
    <Footer />
    </div>
  )
}

export default ProductDetails
