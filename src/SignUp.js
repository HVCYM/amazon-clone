import React from 'react'
import './SignUp.css';

function SignUp() {
  return (
    <div className='signup'>
        <div className='signup__div0'>
            <a href='/'>
                <img 
                    className='signup__logo'
                    src="https://th.bing.com/th/id/R.784e0d0cf1d61dd0ff7086b9bcae58a3?rik=x6gFb7LQrMUAfQ&riu=http%3a%2f%2fgrowyourfaith.today%2fwp-content%2fuploads%2f2017%2f07%2fAmazon-logo_transparent_small.png&ehk=F4rNn0TiJVMSO4yixACq7dyls4y9e83H%2fBViDBlLerw%3d&risl=&pid=ImgRaw&r=0"
                /> 
            </a>
        </div>
         <div className='signup__div1'>
             <div>
                    <p className='signup__div1-line1'>Create account</p>
                    <label for='signup__div1-input' className='signup__div1-label' >Your name</label>
                    <input className='signup__div1-input input-name' type='text' maxLength='32'/>
                    <label for='signup__div1-input' className='signup__div1-label'>Mobile number or email</label>
                    <input className='signup__div1-input input-id' type='email' maxLength='128'/> 
                    <label for='signup__div1-input' className='signup__div1-label'>Password</label>
                    <input className='signup__div1-input input-password' type='password'maxLength={256} placeholder='At least 6 characters'/> 
                    <label for='signup__div1-input' className='signup__div1-label'>Password again</label>
                    <input className='signup__div1-input input-password' type='password'/> 
                    <button className='signup__div1-button'>Continue</button>
                    <p className='signup__div1-line2'>
                        By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.
                    </p>
                    <hr className='line-break1'></hr>
                    <p className='signup__div1-line3'>
                        Already have an account? <a href='/login' id='line3-sign-in'>Sign in</a><br/>
                        Buying for work? Create a free business account
                    </p>
             </div>
         </div>
        <hr width='60%' className='line-break2'/>
        <div className='signup__div4'>
            <span>Condition of Use</span>
            <span>Privacy Notice</span>
            <span>Help</span>
        </div>
        <div className='signup__div5'>
            © 1996-2022, Amazon.com, Inc. or its affiliates
        </div>

    </div>
  )
}

export default SignUp
