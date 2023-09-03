import React from 'react';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';
import "./App.css";
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import Recipes from "./Pages/Recipes"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import AboutUs from "./Pages/AboutUs"
import TermsOfServices  from './Pages/terms/Terms_services';
import TermsConditions from './Pages/terms/Terms_conditions';
import RefundPolicy from './Pages/policies/Refund_policy';
import ReturnPolicy from './Pages/policies/Return_policy';
import Tanjia from './Pages/recipes/tanjia';
import CarrotRaisinSalad from './Pages/recipes/carrot_raisin_salad'
import ChickenTajine from './Pages/recipes/chicken_tajine'
import ProductDetails from './Pages/Product_details'
import Categories from './Pages/Categories';
import Cart from './Pages/cart'
import Order from './Pages/order'
import Skincare from './Pages/categories/skincare/Skincare'
import Gourmet from './Pages/categories/gourmet/Gourmet'
import Decoration from './Pages/categories/decoration/Decoration'
import Cook from './Pages/categories/cook/Cook'
import TeaCups from './Pages/categories/cook/teacup/TeaCups'
import Teapots from './Pages/categories/cook/teapot/TeaPots'
import WoodBox from './Pages/categories/decoration/woodbox/WoodBox'
import LeatherPoufs from './Pages/categories/decoration/leather_poufs/LeatherPoufs'

function App() {
  return (
    
    
    <Router>
      <div className="App">
    
    
    <div className='full_body'>
    <Routes >
     <Route path="/" element={<Home></Home>}></Route> 
     <Route path="/home" element={<Home></Home>}></Route>
     <Route path="/blog" element={<Blog></Blog>}></Route>
     <Route path="/recipes" element={<Recipes></Recipes>}></Route>
     <Route path="/about us" element={<AboutUs></AboutUs>}></Route>
     <Route path="/sign up" element={<SignUp></SignUp>}></Route>
     <Route path="/categories" element={<Categories></Categories>}></Route>
     <Route path="/login" element={<Login></Login>}></Route>
     <Route path="/about us" element={<AboutUs></AboutUs>}></Route>
     <Route path="/terms&conditions" element={<TermsConditions></TermsConditions>}></Route>
     <Route path="/terms of services" element={<TermsOfServices></TermsOfServices>}></Route>
     <Route path="/return policy" element={<ReturnPolicy></ReturnPolicy>}></Route>
     <Route path="/refund policy" element={<RefundPolicy></RefundPolicy>}></Route>
     <Route path="/recipes/tanjia" element={<Tanjia></Tanjia>}></Route>
     <Route path="/recipes/carrot & raisin salad" element={<CarrotRaisinSalad></CarrotRaisinSalad>}></Route>
     <Route path="/recipes/chicken tajine" element={<ChickenTajine></ChickenTajine>}></Route>
     <Route path="/product_details" element={<ProductDetails></ProductDetails>}></Route>
     <Route path="/cart" element={<Cart></Cart>}></Route>
     <Route path="/order" element={<Order></Order>}></Route>
     <Route path="/Skincare" element={<Skincare></Skincare>}></Route>
     <Route path="/Gourmet" element={<Gourmet></Gourmet>}></Route>
     <Route path="/Decoration" element={<Decoration></Decoration>}></Route>
     <Route path="/Cook&Serve" element={<Cook></Cook>}></Route>
     <Route path="/Woodbox" element={<WoodBox></WoodBox>}></Route>
     <Route path="/Leather poufs" element={<LeatherPoufs></LeatherPoufs>}></Route>
     <Route path="/Teapot" element={<Teapots></Teapots>}></Route>
     <Route path="/Teacup" element={<TeaCups></TeaCups>}></Route>
    </Routes>
    </div>
    </div>
   
    </Router>
  
    
  
    
  );
}

export default App;
