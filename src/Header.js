import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {Link}  from 'react-router-dom';

function Header()  {
  return (
    <div className='header'>
        <a href='/'>
            <img 
                className='header__logo'
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            /> 
        </a> 
      <div className='header__nav'>
          <div className='header__option'>
            <span className='header__optionLine1'>
                Hello
            </span>
            <span className='header__optionLine2'>
            <FmdGoodOutlinedIcon className='header__locationIcon'/>Select your address
            </span>

          </div>
      </div>
      <div className='header__search'>
          
          <select className='header__searchCategory'>
              <option selected>All</option>
              <option>All Categories</option>
              <option>Alexa Skills</option>
              <option>Amazon Devices</option>
              <option>Amazon Devices</option>
              <option>Amazon Fashion</option>
              <option>Amazon Devices</option>
              <option>Amazon Fashion</option>
              <option>Amazon Devices</option>
              <option>Amazon Fashion</option>
              <option>Amazon Devices</option>
              <option>Amazon Fashion</option>
              <option>Amazon Fashion</option>
              <option>Apps & Games</option>
          </select>
          <input className='header__searchInput' type='text'/>
          <SearchIcon className='header__searchIcon'/>
      </div>
      <div className='header__nav'>
            <a href='/login'>
                <div className='header__option'>
                    <span className='header__optionLine1'>
                        Hello Guest
                    </span>
                    <span className='header__optionLine2'>
                        Sign In
                    </span>
                </div>
            </a>
            <a href='/login'>
                <div className='header__option'>
                    <span className='header__optionLine1'>
                        Returns
                    </span>
                    <span className='header__optionLine2'>
                        & Orders
                    </span>
                
                </div>
            </a>
            <a href='/login'>
                <div className='header__option'>
                    <span className='header__optionLine1'>
                        Your
                    </span>
                    <span className='header__optionLine2'>
                        Prime
                    </span>
                 
                </div>
            </a>
            
            <div className='header__cart'>
                <a href='/cart'>
                    <AddShoppingCartOutlinedIcon/> 
                    <span className='header__cartCount'>0</span>
                </a>
            </div>
            
      </div>
    </div>
    
  )
}

export default Header
