import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
const ChickenTajine = () => {
  return (
    <div>
    <Navbar></Navbar>
    <div className='row'>
      <div className='recipe-description'>
          <div className='recipe-title'>Discover The Timeless Tradition Of Tajine: A Moroccan Culinary Masterpiece</div>
          <div className='recipe-image'>
          <img class="image" src="/assets/tajine.png"  alt='hello'/>
          </div>

          <p className='recipe-paragraph'> 
          The Moroccan tajine is an exquisite example of traditional cuisine with a long, fascinating history. The history of the tajine, which has its roots in North Africa, is entwined with the rich cultural heritage of Morocco and its traditional culinary techniques. The word "tajine" designates both the food and the distinctive clay pot used to prepare it.
          </p>
          <p className='recipe-paragraph'>
          In the past, nomadic tribes in the Maghreb region used tajine cooking as a practical and inventive way to make filling and delectable meals with scarce resources. The tajine pot's distinct conical shape enables slow, even cooking over an open flame or hot coals. Using this method, ingredients simmered slowly, preserving their flavors and softening tough meats while using little water, a valuable resource in the dry climate. 

          </p>
          <p className='recipe-paragraph'>
          The origins of the Moroccan tajine capture the spirit of Moroccan tradition, heritage, and culture. It is a reflection of the inventiveness of early cooking techniques and the enduring allure of its delicious creations. The tajine, a cherished cultural icon, keeps people together by uniting the past and present and preserving the genuine flavors of Morocco for future generations.

          </p>
         
          
          

      </div>
      <div className='recipe-elements'> 
         <div className='recipe-ingredients'>
              <h2>Ingredients</h2>
              <p className='ingredient-instruction'>5 cloves garlic, finely chopped</p>
              <p className='ingredient-instruction' >¼ teaspoon saffron threads, pulverized</p> 
              <p className='ingredient-instruction' >½ teaspoon ground ginger</p> 
              <p className='ingredient-instruction'>1 teaspoon sweet paprika</p>
              <p className='ingredient-instruction'>½ teaspoon ground cumin</p>
              <p className='ingredient-instruction'>½ teaspoon turmeric</p>
              <p className='ingredient-instruction'>Salt and freshly ground black pepper</p>
              <p className='ingredient-instruction'>1 chicken, cut in 8 to 10 pieces</p>
              <p className='ingredient-instruction' >2 tablespoons extra virgin olive oil</p>
              <p className='ingredient-instruction'>3 medium onions, sliced thin</p>
              <p className='ingredient-instruction'>1 cinnamon stick</p>
              <p className='ingredient-instruction'>8 calamata olives, pitted and halved</p>
              <p className='ingredient-instruction'>8 cracked green olives, pitted and halved</p>
              <p className='ingredient-instruction'>1 large or 3 small preserved lemons (sold in specialty food shops)</p>
              <p className='ingredient-instruction'>1 cup chicken stock</p>
              <p className='ingredient-instruction'>Juice of ½ lemon</p>
              <p className='ingredient-instruction'>1 tablespoon chopped flat-leaf parsley</p>

         </div>
         <div className='recipe-instructions'>
              <h2>Instructions</h2>
              <p className='ingredient-instruction'>
              Mix garlic, saffron, ginger, paprika, cumin and turmeric together. If not using kosher chicken, add ½ teaspoon salt. Add pepper to taste. Rub chicken with mixture, cover, refrigerate and marinate 3 to 4 hours.
              </p>
              <p className='ingredient-instruction'>
              Heat oil in heavy skillet. Add chicken, and brown on all sides. Remove to platter. Add onions to skillet, and cook over medium-low heat about 15 minutes, until lightly browned. Transfer to tagine, if you are using one, or leave in skillet. Add cinnamon stick.
              </p>
              <p className='ingredient-instruction'>
              Put chicken on onions. Scatter with olives. Quarter the lemons, remove pulp and cut skin in strips. Scatter over chicken. Mix stock and lemon juice. Pour over chicken.
              </p>
              <p className='ingredient-instruction'>
              Cover tagine or skillet. Place over low heat, and cook about 30 minutes, until chicken is done. Scatter parsley on top, and serve.
              </p>

         </div>
      

      </div>
    </div> 
    <Footer></Footer>
  </div>
  )
}

export default ChickenTajine 
