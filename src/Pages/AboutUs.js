import React from 'react'
import "../Styles/AboutUs.css"
import '../Components/Navbar/Navbar'
import '../Components/Footer/Footer'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
const AboutUs = () => {
  return (
    <div>
    <Navbar />
    <div class="body">  
      <div >
        <div class="about_us_image">
          <div class="about_us_infos">
          <p class="about_us_title">	Our Company</p>
          <p class="about_us_paragraph">
          TUYYA is a brand of high-end handmade products, born following the discovery of Moroccan ancestral know-how. Since then, close ties have been woven with a selection of the best artisans in the regions. The collaboration then spread across the Moroccan territory and far beyond the various royal cities: Fez, Marrakech, Essaouira, Casablanca and Rabat.
          However, Morocco is also a millennial culinary culture and a rich encyclopedia of ancestral recipes related to body care, developed and maintained for centuries. Eager to discover and share this richness, we have extended our range of products to a selection of objects of Art Deco trend while integrating a varied palette of organic cosmetics born of the association with OVO Skincare,
          and finally Our own range of organic fine food products, which has filled the chefs with the most demanding palates.
          </p>
          <p class="about_us_paragraph">
          Born in 2007 at the first contact with the Land of Morocco and since developed in Montreal with an international ambition, TUYYA is an offer of the luxury of Moroccan tradition.
          We are nostalgic dreamers. A trip to Earth of sunshine. We discover, create, renew and invent constantly to provide the world with sublimated products of unique atmospheres and a lifestyle borrowed from harmony, authenticity and beauty.
          Handmade by Moroccan artisans chosen for the quality of their work, the originality and the modernity of their creations; We have maintained this direct link with our suppliers of food and cosmetics, allowing us to collaborate and control the freshness and quality distinguishing products bearing our name.
          </p>
          <p class="about_us_title">	Contact</p>
          <p class="contact">
          Address: 9600 Rue Meilleur #545, Montreal, QC H2N 2E3,CANADA        
          </p>
          <p class="contact"> Hours: ALL WEEK ONLY BY APPOINTMENT</p>

          </div>

        </div>

      </div>
    </div>
    <Footer /> 
    </div>
  )
}

export default AboutUs

