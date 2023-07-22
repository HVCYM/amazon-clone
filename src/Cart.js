import React from 'react';
import './Cart.css';
import Suggestion from './Suggestion';

function Cart() {
  return (
    <div className='cart'>
        <div className='cart__left'>
            <div className='cart__leftDiv1 cart-div'>
                    <div className='cart__left-Div1-subdiv1'>
                        <img src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg'/>
                    </div>
                    <div className='cart__left-Div1-subdiv2'>
                        <p className='left-Div1-subdiv2-p1'>Your Amazon Basket is empty</p>
                        <p className='left-Div1-subdiv2-p2'>Shop today's deals</p>
                        <a href='/login'>
                            <button className='button-sign-in'>Sign in to your account</button>
                        </a>
                        <a href='/signup'>
                            <button className='button-sign-up'>Sign up now</button>
                        </a>
                    </div>                 
            </div>
            <div className='cart__leftDiv2'>

            </div>
            <p>
            The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
            <br/>Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.
            </p>
        </div>
        <div className='cart__right cart-div'>
            <p>Customers who bought <br/>items in your Recent <br/>History also bought</p>
            <Suggestion
                image='https://m.media-amazon.com/images/I/81P+UHZrdTL._SX679_.jpg'
                desc='Bosch F016800421 Self Priming Suction Hose (Green)'
                rating={4.5}
                price={23.45}
            />
            <Suggestion
                 image='https://m.media-amazon.com/images/I/717wYrO+b0L._SL1500_.jpg'
                 desc='Bosch Aquatak 125 1500-Watt High Pressure Washer'
                 rating={4.2}
                 price={43.94}
            />
            <Suggestion
                image='https://m.media-amazon.com/images/I/61VC6UUB7GL._SL1500_.jpg'
                desc='Karcher Plastic FJ 3 Foam Jet K2-K7 (Black and Yellow)'
                rating={4.7}
                price={13.99}
            />
            
        </div>
        
    </div>
  )
}

export default Cart
