import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import {FaShoppingCart} from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className='navbar'>
    <h3 className='logo'>Tuyya</h3>
    <ul className='links'>
      <li ><Link to="/home" className='home'><p>Home</p></Link></li>
      <li className="mega-menu-container">
        <Link to="/categories" className='categories'>
          <p>Categories</p>
        </Link>
        <div className="mega-menu">
          {/* Mega menu content goes here */}
          

          <div className='mega_menu_row'>
  <div className='mega_menu_column'>
    <ul className='mega_links'>
    <Link to="/Gourmet" ><li><header>Gourmet</header></li></Link>
    </ul>
  </div>
  <div className='mega_menu_column'>
    <ul className='mega_links'>
    <Link to="/Cook&Serve" ><li><header>Cook & Serve</header></li></Link>
    <Link to="/Teapot" ><li>TEAPOT</li></Link>
    <Link to="/Teacup" > <li>TEA CUP</li></Link>
    <Link to="/Tanjia" > <li>COOKING TAJINES</li></Link>
    <Link to="/Tajine" ><li>SERVING TAJINES</li></Link>
    <Link to="/Tanjia" ><li>TANJIA</li></Link>
    <Link to="/Accessories" ><li>ACCESSORIES</li></Link>
    <Link to="/Plate" ><li>PLATE</li></Link>
    <Link to="/Tureen" > <li>SOUP TUREEN</li></Link>
    <Link to="/Basket" > <li>MARKET BASKET</li></Link>
    <Link to="/Bowls" > <li>BOWLS  & SALADIERS</li></Link>
    </ul>
  </div>
  <div className='mega_menu_column'>
    <ul className='mega_links'>
    <Link to="/Decoration" ><li><header>Decoration</header></li></Link>
    <Link to="/Woodbox" ><li>WOOD BOX</li></Link>
    <Link to="/Leather poufs" > <li>LEATHER POUFS</li></Link>
      
    </ul>
  </div>
  <div className='mega_menu_column'>
    <ul className='mega_links'>
    <Link to="/Skincare" ><li><header>Skincare</header></li></Link>
      
    </ul>
  </div>
</div>
        </div>
      </li>
      <li><Link to="/recipes" className='recipes'><p>Recipes</p></Link></li>
      <li><Link to="/blog" className='blog'><p>Blog</p></Link></li>
      <li><Link to="/about us" className='about'><p>About us</p></Link></li>
      
    </ul>
    <ul className='other-links'>
      <li ><Link to="/cart" className='shopping_cart'><FaShoppingCart/></Link></li>
      <li><Link to="/login" className='login'>Login</Link></li>
      <li><Link to="/sign up" className='signup'>Sign Up</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar
