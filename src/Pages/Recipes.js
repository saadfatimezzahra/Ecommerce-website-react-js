import React from 'react'
import "../Styles/Recipes.css"
import {Link} from 'react-router-dom';
import '../Components/Navbar/Navbar'
import '../Components/Footer/Footer'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
const Recipes = () => {
  return (
    <div>
    <Navbar />
    <div className='body'>
      <h3>Learn to make traditional Moroccan food with our collection of authentic Moroccan recipes</h3>
      <div className='first-container'>
        <div class='rows'>
          <div class="recipe">
            <div>
              <img class="image" src="/assets/tanjia.png" width="400px" height="350px" alt='hello'/>
            </div>
            <h4 className='recipe_title'>Discover The Timeless Tradition Of Tanjia: A Moroccan Culinary Masterpiece</h4>
            <Link to="/recipes/tanjia"  className='read_more_about_recipe'>Read More</Link>
          </div>
          <div class="recipe">
            <div>
              <img class="image" src="/assets/carrot_raisin_salad.jpg" width="400px" height="350px" alt='hello'/>
            </div>
            <h4 className='recipe_title'>Moroccan Carrot And Raisin Salad With TUYYA™ Organic Toasted Argan Oil</h4>
            <Link to="/recipes/carrot & raisin salad"  className='read_more_about_recipe'>Read More</Link>
          </div>
          <div class="recipe">
            <div>
            <img class="image" src="/assets/tajine.png" width="400px" height="350px" alt='hello'/>
            </div>
            <h4 className='recipe_title'>Tanjia: A Moroccan Culinary Masterpiece </h4>
            <Link to="/recipes/chicken tajine"  className='read_more_about_recipe'>Read More</Link>
          </div>
          

        </div>
        

      </div>
      
    </div>
    <Footer />
    </div>
  )
}

export default Recipes
