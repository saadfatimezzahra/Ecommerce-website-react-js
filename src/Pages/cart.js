import React from 'react'
import '../Styles/Cart.css'
import {FaTrash} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import '../Components/Navbar/Navbar'
import '../Components/Footer/Footer'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar';
const Cart = () => {
  return (
    <div>
    <Navbar />
    <div className='body'>
        <h3>Shopping Cart</h3>
    <div className='table_container'>
        <table>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
            </tr>

            <tr>
                <td>
                    <div className='row'>
                        <div className='cart_images'>
                            <img class="product-image" src="/assets/the.jpeg" width="100px" height="100px" alt='hello'/>
                        </div>
                        <div className='cart_text'>
                        Colored henna  tea  glass
                        </div>
                    </div>
                
                
                </td>
                <td className='price'>186.0</td>
                <td>
                <input type="text"   required className='quantity'></input>
                </td>
                <td><FaTrash className='trash'/></td>
            </tr>
            <tr>
                <td>
                    <div className='row'>
                        <div className='cart_images'>
                            <img class="product-image" src="/assets/the.jpeg" width="100px" height="100px" alt='hello'/>
                        </div>
                        <div className='cart_text'>
                        Colored henna  tea  glass
                        </div>
                    </div>
                
                
                </td>
                <td className='price'>186.0</td>
                <td>
                    <input type="text"   required className='quantity'></input>
                </td>
                <td><FaTrash className='trash'/></td>
            </tr>
            <tr>
                <td>
                    <div className='row'>
                        <div className='cart_images'>
                            <img class="product-image" src="/assets/the.jpeg" width="100px" height="100px" alt='hello'/>
                        </div>
                        <div className='cart_text'>
                        Colored henna  tea  glass
                        </div>
                    </div>
                
                
                </td>
                <td className='price'>186.0</td>
                <td>
                    <input type="text"   required className='quantity'></input>
                </td>
                <td><FaTrash className='trash'/></td>
            </tr>
        </table>
    </div>
    <div className="total-bar">
  <span class="total-text">Total:</span>
  <span class="total-amount">$372.00</span> 
   </div>
   <div className='checkout_container'><Link to="/order"  className='checkout_btn'>Checkout</Link></div>
  
</div>
<Footer />
</div>
  )
}

export default Cart
