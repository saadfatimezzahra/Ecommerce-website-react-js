import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
const CarrotRaisinSalad = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='row'>
        <div className='recipe-description'>
            <div className='recipe-title'>Moroccan Carrot And Raisin Salad With TUYYA™ Organic Toasted Argan Oil</div>
            <div className='recipe-image'>
            <img class="image" src="/assets/carrot_raisin_salad.jpg" width="700px" height="700px" alt='hello'/>
            </div>

            <p className='recipe-paragraph'> 
            Cette salade marocaine facile et rafraîchissante de carottes et de raisins apporte une explosion de douceur naturelle et de couleurs vives à votre table. Un délicieux mélange de carotte râpée, de raisins juteux, de coriandre et de persil frais, le tout assaisonné d'un équilibre délicat d'huile d'argan grillée biologique TUYYA™ et de vinaigre de vin.
            </p>
            
            
            

        </div>
        <div className='recipe-elements'> 
           <div className='recipe-ingredients'>
                <h2>Ingredients</h2>
                <p className='ingredient-instruction'>1 carrot</p>
                <p className='ingredient-instruction' >1 handful of raisins</p> 
                <p className='ingredient-instruction' >A few coriander seeds</p> 
                <p className='ingredient-instruction'>Fresh parsley</p>
                <p className='ingredient-instruction'>TUYA™ organic toasted argan oil</p>
                <p className='ingredient-instruction'>Wine vinegar</p>
                <p className='ingredient-instruction'>Salt</p>
                <p className='ingredient-instruction'>Pepper</p>
                

           </div>
           <div className='recipe-instructions'>
                <h2>Instructions</h2>
                <p className='ingredient-instruction'>
                Peel and grate the carrot. Soak the raisins in orange juice. Let marinate before adding to the carrots. Add the raisins and coriander seeds.
                </p>
                <p className='ingredient-instruction'>
                Drizzle a stream of TUYA™ organic toasted argan oil and balsamic vinegar. Season with salt and pepper. Add fresh parsley.
                </p>
                <p className='ingredient-instruction'>
                Leave overnight in the refrigerator or enjoy immediately.
                </p>

           </div>
        

        </div>
      </div> 
      <Footer></Footer>
    </div>
  )
}

export default CarrotRaisinSalad
