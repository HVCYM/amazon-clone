import React from 'react';
import './Suggestion.css';

function Suggestion({image,desc,rating,price}) {
  return (
    <div className='suggestion'>
        <img
            className='suggestion-image'
            src={image}
        />
        <div className='image-info'>
            <p className='desc'>{desc}</p>
            <p className='rating'>{rating}</p>
            <p className='price'> <small>$</small> <strong>{price}</strong> </p>
            <button className='image-info-add-button'>Add to cart</button>
        </div>
    </div>
  )
}

export default Suggestion
