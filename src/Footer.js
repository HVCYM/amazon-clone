import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <div className='footer'>
        
            <a href='#top'>
                <div className='footer__back-to-top'>
                    <p>Back to top</p>
                </div>
            </a>
        <div className='footer__info'>
            <div className='footer__info-div info-div1'>
                <span className='info__line1'>Get to Know Us</span>
                <p>About Us</p>
                <p>Careers</p>   
                <p>Press Releases</p>
                <p>Amazon Cares</p> 
                <p>Gift a Smile</p>  
                <p>Amazon Science</p> 

            </div>
            <div className='footer__info-div info-div2'>
                <span className='info__line1'>Connect with Us</span>
                <p>Facebook</p>
                <p>Twitter</p>   
                <p>Instagram</p>
            </div>
            <div className='footer__info-div info-div3'>
                <span className='info__line1'>Make Money with Us</span>
                <p>Sell on Amazon</p>
                <p>Sell under Amazon Accelerator </p>   
                <p>Amazon Global Selling</p>
                <p>Become an Affiliate</p> 
                <p>Fulfilment by Amazon</p>  
                <p>Advertise Your Products</p> 
                <p>Amazon Pay on Merchants</p>
            </div>
            <div className='footer__info-div info-div4'>
                <span className='info__line1'>Let Us Help You</span>
                <p>COVID-19 and Amazon</p>
                <p>Your Account</p>
                <p>Returns Centre</p>
                <p>100% Purchase Protection</p>
                <p>Amazon App Download</p>
                <p>Amazon Assistant Download</p>
                <p>Help</p>
            </div>
        </div>
        <div className='footer__lineGap'>

        </div>
        <div className='footer__countries'>
            <div>
                <a href='/'>
                    <img 
                        className='footer__logo'
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    />
                </a> 
                <select className='languages'>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>French</option>
                </select>
            </div>
            <p>Australia&nbsp;&nbsp;&nbsp;&nbsp;Brazil&nbsp;&nbsp;&nbsp;&nbsp;Canada&nbsp;&nbsp;&nbsp;&nbsp;China&nbsp;&nbsp;&nbsp;&nbsp;France&nbsp;&nbsp;&nbsp;&nbsp;Germany&nbsp;&nbsp;&nbsp;&nbsp;Italy &nbsp;Japan&nbsp;&nbsp;&nbsp;&nbsp;Mexico&nbsp;&nbsp;&nbsp;&nbsp;Netherlands&nbsp;&nbsp;&nbsp;&nbsp;Poland&nbsp;&nbsp;&nbsp;&nbsp;Singapore&nbsp;&nbsp;&nbsp;&nbsp;Spain&nbsp;&nbsp;&nbsp;&nbsp;Turkey&nbsp;&nbsp;&nbsp;&nbsp;United Arab Emirates&nbsp;&nbsp;&nbsp;&nbsp;United</p>
            <p>Kingdom&nbsp;&nbsp;&nbsp;&nbsp;United States</p>
        </div>
        <div className='footer__othersContainer'>
           <div className='othersContainer-div'>
                <div className='others-div'>
                    <div>
                        <p className='others__line1'>AbeBooks</p>
                        <p>Books, art</p>
                        <p>& collectibles</p>
                    </div>
                    <div>
                        <p className='others__line1'>Shopbop</p>
                        <p>Designer</p>
                        <p>Fashion Brands</p>
                    </div>
                </div>
                <div className='others-div'>
                    <div>
                        <p className='others__line1'>Amazon Web Services</p>
                        <p>Scalabe Cloud</p>
                        <p>Computing Services</p>
                    </div>
                    <div>
                     <p className='others__line1'>Amazon Business</p>
                        <p>Everything For</p>
                        <p>Your Business</p>
                    </div>
                </div>
                <div className='others-div'>
                    <div>
                        <p className='others__line1'>Audible</p>
                        <p>Download</p>
                        <p>Audio Books</p>
                    </div>
                    <div>
                        <p className='others__line1'>Primme Now</p>
                        <p>2-Hour Delivery</p>
                        <p>on Everyday Items</p>
                    </div>
                </div>
                <div className='others-div'>
                    <div>
                        <p className='others__line1'>DPReview</p>
                        <p>Digital</p>
                        <p>Photograhy</p> 
                    </div>
                    <div>
                        <p className='others__line1'>Amazon Prime Music</p>
                        <p>90 million songs, ad-free</p>
                        <p>Over 15 million podcast episodes</p> 
                    </div>
                </div>
                <div className='others-div'>
                    <div>
                        <p className='others__line1'>IMDb</p>
                        <p>Movies,TV</p>
                        <p>& Celebrities</p>
                    </div>
                </div>
            </div>
            <div className='othersContainer-div'>
                <p>Conditions of Use & Sale</p>
                <p>Privacy Notice</p>
                <p>Interest-Based Ads</p>
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
