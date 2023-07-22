import React from 'react';
import './Home.css';
import Product from './Product';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


function Home() {
  return (
    
    <div className='home'>
        <div className='top'> </div>
        <div className='home__container'>
            <button className='home__buttonLeft' id='button'><ArrowBackIosNewOutlinedIcon className='button__icon' /></button>
            <button className='home__buttonRight' id='button'><ArrowForwardIosOutlinedIcon className='button__icon'/></button>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/April2022GW/New_FDFO_Apay_ICICI/Bags_and_backpacks/PC_backpack_2x_3000x._CB623853705_.jpg'/>
            <div className='home__row row1'>
                <Product
                desc='Up to 70% off | Clearance store'
                price={299.89}
                rating={4}
                image='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_2x._SY608_CB628315133_.jpg'

                />
                <Product
                desc='HP M270 Backlit USB Gaming Mouse'
                price={9.79}
                rating={4.5}
                image="https://m.media-amazon.com/images/I/71JfFnUwqCL._SL1500_.jpg"
                />
                <Product
                desc='iQOO Z6 44W (4GB RAM, 128GB Storage)'
                price={199.99}
                rating={4.5}
                image='https://m.media-amazon.com/images/I/61hJWkx8LSL._SL1200_.jpg'

                />
                <Product
                desc=' Redgear Shadow Blade Mechanical Keyboard'
                price={89.58}
                rating={4}
                image='https://m.media-amazon.com/images/I/61NKGdlO36L._SL1500_.jpg'
                />
                <Product
                desc='New Apple AirPods Max - Pink'
                price={199.99}
                rating={4.5}
                image='https://m.media-amazon.com/images/I/81NIpE9-5mL._SL1500_.jpg'
                />

            </div>
            <div className='home__row ro2'>
                <Product
                desc='FINIVO FASHION Men Cotton Shirt'
                price={79.49}
                rating={4.2}
                image='https://m.media-amazon.com/images/I/61100SqRbcL._UL1500_.jpg'
                />
                <Product
                desc="Speed X Fashion Women's Handbag"
                price={49.69}
                rating={4}
                image='https://m.media-amazon.com/images/I/71dByA4eVLL._UL1500_.jpg'
                />
                <Product
                desc='FASHION WORLD Printted Shoes'
                price={29.99}
                rating={4.5}
                image='https://m.media-amazon.com/images/I/81EX+LuOGrL._UL1500_.jpg'
                />
            </div>
            <div className='home__row ro3'>
            <Product
                desc='Tata Sampann Unpolished Toor Dal/ Arhar Dal, 1kg Protein Rich'
                price={19.99}
                rating={4.5}
                image='https://m.media-amazon.com/images/I/71hFwEGKyZL._SL1000_.jpg'
                />
                <Product
                desc='WOW Apple Cider Vinegar Shampoo and Organic Virgin Coconut oil plus Avacado Oil Conditioner'
                price={9.99}
                rating={4}
                image='https://m.media-amazon.com/images/I/81XiDFT+zUL._SL1500_.jpg'
                />
            </div>
        </div>
    </div>
  )
}

export default Home
