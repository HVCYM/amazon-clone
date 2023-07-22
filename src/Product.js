import React from 'react';
import './Product.css';

function Product({desc,price,rating,image}) {
  return (
    <div className='product'>
        <div className='product__info'>
            <p className='product__desc'>{desc}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
        </div>
        <div className='product__rating'>
            <p className='rating__stars'>{rating} ⭐</p>
        </div>
        <div className='image__div'>
            <img 
                className='product__image'
                src={image} alt=""
            />
        </div>
        <button className='product__button'>Add to Cart</button>
    </div>
  )
}

export default Product
