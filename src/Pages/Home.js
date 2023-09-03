import React from 'react'
import "../Styles/Home.css" ;
import {Link} from 'react-router-dom'
import {useState , useEffect} from 'react' ;
import axios from "axios" ;
import '../Components/Navbar/Navbar'
import '../Components/Footer/Footer'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar';
const Home = () => {
  const [products , setProducts] = useState([])
  useEffect(()=> {
    async function getAllProducts(){
      try{
        const products = await axios.get("http://127.0.0.1:8000/api/products/")
        console.log(products.data)
        setProducts(products.data)
         }
         catch(error){
          console.log(error)

         }
  }
  getAllProducts()

} ,[]

  )
  return (
    <div>
      <Navbar />
    <div className='body'>
    <div className='first_container'>
      <div className='rows'>
        <div className='image-container-1'>
        <img class="image" src="/assets/tajine_tanjia_couscous.png" width="700px" height="500px" alt='hello'/>

        </div>
        <div className='text-container-1'>
          <p className='first-text'>
            Our website provides various
             Moroccan recipes which make
             you ENJOY Moroccan dishes .

          </p>
          <p className='second-text'>
          Follow the steps & prepare 
          your first Moroccan food.


          </p>
          <Link to="/recipes">
          <button className='first-button'>Read More</button>
          </Link>

        </div>
      </div>
    </div>
    <div className='home_blog_section'>Unveil Morocco's Cultural Magic: Explore Captivating Images and Stories in Our Blog.</div>
    <div className='second_container'>
      

  <div className='image-gallery'>
    <Link to="/blog">
    <div className='image-item'>
      <img class="blog-image" src="/assets/rabat.webp" alt='hello' />
      <div className='image-description'>
        <p className='image-text'>Welcome to the mesmerizing city of Rabat, where history, culture, and beauty converge. From its ancient roots to its modern-day significance...</p>
      </div>
    </div>
    </Link>
    <Link to="/blog">
    <div className='image-item'>
      <img class="blog-image" src="/assets/poterie.jpg" alt='hello' />
      <div className='image-description'>
        <p className='image-text'>Fès reste la ville qui a fait la grandeur de la céramique marocaine. D'origine très ancienne, les céramiques de Fès sont reconnaissables par leur décor à dominante bleu de cobalt...</p>
      </div>
    </div>
    </Link>
    <Link to="/blog">
    <div className='image-item'>
      <img class="blog-image" src="/assets/Jemaa-El-Fna.jpg" alt='hello' />
      <div className='image-description'>
        <p className='image-text'>La place Jemaa el-Fna est l’un des principaux espaces culturels de Marrakech. Devenue l’un des symboles de la ville depuis sa fondation au onzième siècle, elle offre une concentration exceptionnelle de traditions culturelles populaires marocaines qui s’expriment à travers la musique, la religion et diverses expressions artistiques.</p>
      </div>
    </div>
    </Link>
  </div>
</div>
    <h3>See Our Products</h3>
    <div className='products'>
      
     <Link to="/product_details" >
      <div className='products_container'>
      <img class="products_image" src="/assets/the.jpeg" width="250px" height="270px" alt='hello'/>
      <div className='products_title'>Colored henna  tea  glass</div>
      <div className='products_price'>186.0 dh</div>
      </div>
      </Link>
      
      
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

export default Home
