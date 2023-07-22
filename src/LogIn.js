import React from 'react';
import './LogIn.css';

function LogIn() {
  return (
    <div className='login'>
        <div className='login__div0'>
            <a href='/'>
                <img 
                    className='login__logo'
                    src="https://th.bing.com/th/id/R.784e0d0cf1d61dd0ff7086b9bcae58a3?rik=x6gFb7LQrMUAfQ&riu=http%3a%2f%2fgrowyourfaith.today%2fwp-content%2fuploads%2f2017%2f07%2fAmazon-logo_transparent_small.png&ehk=F4rNn0TiJVMSO4yixACq7dyls4y9e83H%2fBViDBlLerw%3d&risl=&pid=ImgRaw&r=0"
                />
            </a> 
        </div>
         <div className='login__div1'>
             <div>
                <p className='login__div1-line1'>Sign-In</p>
                 <label for='' className='login__div1-label'>Email or mobile phone number</label>
                 <div className='input-div'> <input className='login__div1-input' type='email'/> </div>
                 <button className='login__div1-button'>Continue</button>
                 <p className='login__div1-line2'>
                     By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                 </p>
                 <p className='login__div1-line3'>Need help?</p>
             </div>
         </div>
         <div className='login__div2'>
             <div className='line-break'></div>
             <span className='line-text'>New to Amazon?</span>
             <div className='line-break'></div>
         </div>
         
        <div className='login__div3'>
            <a href='/signup'> <button className='login__div3-button'>Create your Amazon account</button> </a>
        </div>
        <div className='line-break-2'> </div>
        <div className='login__div4'>
            <span>Condition of Use</span>
            <span>Privacy Notice</span>
            <span>Help</span>
        </div>
        <div className='login__div5'>
            © 1996-2022, Amazon.com, Inc. or its affiliates
        </div>

    </div>
  )
}

export default LogIn
