import React from 'react'
import "../Styles/Blog.css" ;
import '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar';
const Blog = () => {
  return (
    <div>
      <Navbar />
    <div  className='image_container'>
     <p className='quote'>
     "Moroccan traffic isn’t like normal traffic. It’s armed combat, a war of wills, in which only the bravest have the chance to survive."
      </p> 
      <p className='author'>Tahir Shah</p>
    </div>
    
    <div>
      <div className='post'>
        <div className='post_container'>
        <div className='post_image'> 
        <img class="image" src="/assets/rabat.webp" width="400px" height="420px" alt='hello'/>
        </div> 
        <div className='first_post_description'>
          <p className='post_title'>DISCOVER THE ENCHANTING CHARMS OF RABAT: THE ROYAL CITY OF MOROCCO</p>
          <p className='post_paragraph'>
          Welcome to the mesmerizing city of Rabat, where history, culture, and beauty converge. From its ancient roots to its modern-day significance, Rabat has captivated visitors for centuries. In this blog post, we delve into the rich culture, architectural wonders, and natural splendor that make Rabat a must-visit destination. Join us on a journey through the enchanting streets, vibrant gardens, and majestic landmarks of this royal city. Get inspired by Rabat's allure and explore our curated collection of authentic Moroccan products.
          </p>
          <p className='post_paragraph'>
          Rabat, with its ancient heritage, holds a significant place in Moroccan history. Once the capital of the Almohad empire and now the capital of modern-day Morocco, Rabat is steeped in a rich tapestry of traditions and cultural influences. The city's architectural marvels, such as the Royal Palace and governmental buildings, showcase the grandeur of Moroccan craftsmanship. Explore the charming medina, stroll through the enchanting gardens, and uncover the secrets of Rabat's historical sites.
          </p>

        </div>
        </div> 

      </div>

      <div className='post'>
      <div className='post_container'>
        <div className='post_image'> 
        <img class="image" src="/assets/the.jpeg" width="400px" height="350px" alt='hello'/>
        </div> 
        <div className='post_description'>
          <p className='post_title'>LA CÉRÉMONIE DU THÉ MAROCAIN</p>
          <p className='post_paragraph'>
          Le thé est, par excellence, la boisson universelle née de la rencontre de deux civilisations, de deux mondes l'Orient et l'Occident. Breuvage cinq fois millénaire, à la fois sain, désaltérant et savoureux, le thé est la boisson la plus consommée après l'eau et représente aujourd'hui plus de trois milliards de consommateurs dans le monde.

          Qu'il soit vert, semi-fermenté, noir, fumé, parfumé à la menthe ou aux fleurs, glacé ou en sachets, sucré ou enrichi de beurre, on boit du thé dans le monde entier.

          Du thé Gongfu chinois au Five O'clock anglais, en passant par le Chanoyu japonais, le samovar russe ou encore le thé à la menthe maghrébin, l'homme, sur tous les continents, porte à ses lèvres une tasse ou un verre de thé selon des rites essentiels.
          </p>
          <p className='post_paragraph'>
          Au Maroc, bien plus qu'une simple boisson chaude, le thé est tout un art de vivre.

          Au-delà des bouleversements du mode de vie, la chaleur de l'hospitalité demeure : le plus pauvre des montagnards offrira toujours un verre de thé à la menthe. Simplicité des gestes, cordialité de l'accueil, gaieté spontanée malgré les difficultés quotidiennes, tout cela contribue au charme insaisissable et émouvant du peuple marocain dont chaque parole et chaque geste sont régis par le sens de l'honneur et un profond sentiment religieux.

          Contrairement aux idées reçus par les touristes, les marocains ne consomme pas forcément le thé à la menthe toute l'année, mais le réserve aux mois chaud, car il est apprécié, en autre, pour ses valeurs rafraichissantes.

          Par contre, pendant les mois d'hiver, la menthe laisse place à la Chiba ou Absinthe Marocaine. En effet, la chiba a notamment la propriété de réchauffer le corps de l'intérieur.
          </p>

        </div>
       </div> 

      </div>
      <div className='post'>
        <div className='post_container'>
        <div className='post_image'> 
        <img class="image" src="/assets/poterie.jpg" width="400px" height="350px" alt='hello'/>
        </div> 
        <div className='post_description'>
          <p className='post_title'>LA POTERIE DE FES</p>
          <p className='post_paragraph'>
           Fès reste la ville qui a fait la grandeur de la céramique marocaine. D'origine très ancienne, les céramiques de Fès sont reconnaissables par leur décor à dominante bleu de cobalt, couleur de la ville, et les motifs qui allient le vert et le jaune or. Véritables artistes, les maîtres-potiers de Fès développent depuis des siècles un sens subtil de l'ornementation émaillée. Encore de nos jours, les ateliers de la ville impériale restent inégalés pour l'élégance et la finesse de leur production. Fès reste la capitale incontestée de la faïence, bleue ou polychrome, sur fond blanc. Les maîtres potiers de la ville impériale rivalisent de talent pour réaliser des pièces de céramique finement travaillées et décorées.
          </p>
          <p className='post_paragraph'>
          C'est à Fès qu'est née la céramique émaillée et vernissée. En 814, Idriss II accueille dans sa nouvelle capitale des milliers d'immigrés venus de Cordoue. Parmi ces hommes se trouvent des artisans expérimentés qui ont apporté avec eux des techniques alors inconnues au Maroc. La poterie n'est plus seulement utilitaire, les pièces deviennent des oeuvres d'art et font la renommée de la ville dans toute l'Afrique du Nord. A l'époque des Almohades, au 13ème siècle, on ne recensait pas moins de 180 potiers à Fès. On y dénombre encore aujourd'hui une cinquantaine de patrons potiers qui emploient chacun quatre ou cinq ouvriers et apprentis.
          </p>
          <button class='read_more_about_poterie'  >READ MORE</button>  
        </div>
       </div> 

      </div>
      <div className='post'>
       <div className='post_container'>
        <div className='post_image'> 
        <img class="image" src="/assets/verres_a_the.jpeg" width="400px" height="350px" alt='hello'/>
        </div> 
        <div className='post_description'>
          <p className='post_title'>LES VERRES A THE</p>
          <p className='post_paragraph'>
          Le thé, par excellence, la boisson universelle !
          </p>
          <p className='post_paragraph'>
          Le thé est, par excellence, la boisson universelle née de la rencontre de deux civilisations, de deux mondes : l'Orient et l'Occident.
          </p>
          <p className='post_paragraph'>
          Breuvage cinq fois millénaire, à la fois sain, désaltérant et savoureux, le thé est la boisson la plus consommée après l'eau et représente aujourd'hui plus de trois milliards de consommateurs dans le monde.
          </p>
          <p className='post_paragraph'>
          Qu'il soit vert, semi-fermenté, noir, fumé, parfumé à la menthe ou aux fleurs, glacé ou en sachets, sucré ou enrichi de beurre, on boit du thé dans le monde entier. Du thé Gongfu chinois au Five O'clock anglais, en passant par le Chanoyu japonais, le samovar russe ou encore le thé à la menthe maghrébin, l'homme, sur tous les continents, porte à ses lèvres une tasse ou un verre de thé selon des rites essentiels. Au Maroc, bien plus qu'une simple boisson chaude, le thé est tout un art de vivre. Au-delà des bouleversements du mode de vie, la chaleur de l'hospitalité demeure : le plus pauvre des montagnards offrira toujours un verre de thé à la menthe. Simplicité des gestes, cordialité de l'accueil, gaieté spontanée malgré les difficultés quotidiennes, tout cela contribue au charme insaisissable et émouvant du peuple marocain dont chaque parole et 
          chaque geste sont régis par le sens de l'honneur et un profond sentiment religieux.
          </p>

        </div>
        </div>

      </div>
    </div>
   <Footer /> 
    </div>
    
  )
}

export default Blog

