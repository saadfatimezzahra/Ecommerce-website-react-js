import React from 'react'
import "../../Styles/tanjia_recipe.css"
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
const Tanjia = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='row'>
        <div className='recipe-description'>
            <div className='recipe-title'>Discover The Timeless Tradition Of Tanjia: A Moroccan Culinary Masterpiece</div>
            <div className='recipe-image'>
            <img class="image" src="/assets/tanjia.png"  alt='hello'/>
            </div>

            <p className='recipe-paragraph'> 
            Welcome to Tuyya.com, your one-stop destination for authentic Moroccan handcrafted products! Today, we're delighted to introduce you to the fascinating world of Tanjia, a traditional Moroccan dish that showcases the rich culinary heritage of the country. At the heart of this culinary masterpiece lies the Tanjia clay cookpot, an essential tool in Moroccan kitchens for generations. Join us as we delve into the history, benefits, and art of cooking with Tanjia, and explore the exceptional flavors it brings to your table.
            </p>
            <p className='recipe-paragraph'>
            The History Behind: Tanjia holds a special place in Moroccan cuisine, with its origins dating back centuries. This beloved dish originated in the vibrant city of Marrakech, where it was traditionally prepared by local workers known as "Djemaa El Fnaa" during their lunch breaks. These laborers would slow-cook the Tanjia in underground ovens called "farnatchis" while they worked, resulting in a heavenly blend of flavors by the time they returned.

            </p>
            <p className='recipe-paragraph'>
            Benefit of Cooking with Tanjia Clay Cookpot: The Tanjia clay cookpot plays a crucial role in the exquisite taste and texture of this dish. Made from unglazed terracotta clay, the Tanjia cookpot creates the perfect environment for slow cooking. The porous nature of the clay allows moisture to escape gradually, enhancing the tenderness and depth of flavors in the dish. This traditional cooking method ensures that the ingredients meld together harmoniously, creating a truly unique and memorable culinary experience.

            </p>
            <p className='recipe-paragraph'>
            Seasoning and Maintenance: To ensure the longevity of your Tanjia clay cookpot, it is essential to season it properly before use. Begin by submerging the pot in cold water for 12 to 24 hours. Afterward, remove it from the water, dry it thoroughly, and rub the interior with olive oil. Place it in a preheated oven at a low temperature for an hour to cure the clay.
            </p>
            <p className='recipe-paragraph'>
            To maintain the quality of your Tanjia cookpot, it is recommended to hand-wash it with warm water and a gentle brush after each use. Avoid using harsh detergents or abrasive materials, as they can damage the clay. With proper care, your Tanjia cookpot will become a cherished kitchen companion for years to come.

            </p>
            <p className='recipe-paragraph'>
            The Perfect Tanjia Recipe: Now that you have your Tanjia clay cookpot, it's time to dive into the exciting world of flavors that await you. Here's a simple and authentic Tanjia recipe to get you started:
            </p>
            

        </div>
        <div className='recipe-elements'> 
           <div className='recipe-ingredients'>
                <h2>Ingredients</h2>
                <p className='ingredient-instruction'>1.5 kg lamb shoulder or beef shank, cut into chunks</p>
                <p className='ingredient-instruction' >2 aged preserved lemons TUYYA, rinsed and quartered</p> 
                <p className='ingredient-instruction' >2 aged preserved lemons TUYYA, rinsed and quartered</p> 
                <p className='ingredient-instruction'>2 tablespoons TUYYA organic unfiltered olive oil</p>
                <p className='ingredient-instruction'>2 onions, finely chopped</p>
                <p className='ingredient-instruction'>3 garlic cloves, minced</p>
                <p className='ingredient-instruction'>1 teaspoon ground ginger</p>
                <p className='ingredient-instruction'>1 teaspoon ground cumin</p>
                <p className='ingredient-instruction' >1 teaspoon ground paprika</p>
                <p className='ingredient-instruction'>A pinch of TUYYA Taliouine saffron threads</p>
                <p className='ingredient-instruction'>Salt and pepper to taste</p>
                <p className='ingredient-instruction'>Fresh cilantro for garnish</p>

           </div>
           <div className='recipe-instructions'>
                <h2>Instructions</h2>
                <p className='ingredient-instruction'>
                In your seasoned Tanjia clay cookpot, combine the meat, preserved lemons, olive oil, onions, garlic, ginger, cumin, paprika, saffron, salt, and pepper. Mix well to ensure the meat is evenly coated with the spices.
                </p>
                <p className='ingredient-instruction'>
                Cover the Tanjia cookpot with its lid and place it in a preheated oven at 150°C (300°F) for 4 to 5 hours. The slow cooking process will infuse the flavors and create tender, melt-in-your-mouth meat.
                </p>
                <p className='ingredient-instruction'>
                Once cooked, remove the Tanjia from the oven and garnish with fresh cilantro. Serve it with steamed couscous or warm Moroccan bread for an authentic experience.
                </p>

           </div>
        

        </div>
      </div> 
      <Footer></Footer>
    </div>
  )
}

export default Tanjia
