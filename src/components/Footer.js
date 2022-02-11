import React from 'react'
import '../styles/footer.css'

function Footer() {
    return (
        <div className = 'bottom_grid'>
            <div className='one'> 
            <img className='footimg' src='https://rcnglasgow.com/assets/images/logo2.png' />
            </div>
            <div className='two'>
                
<p><strong>Address Location</strong></p>
<p>53 Kilbirnie street Glasgow, G5 8JD</p>
<p><strong>Phone:</strong> +447598 250141</p>
<p><strong>Email:</strong> info@rcnglasgow.com</p>
<p><strong>Office Time:</strong> 9.00am to 5pm Monday - Saturday</p>


            </div>
            <div className='three'>
<p id='footer_three_heading'><strong>Quick Links</strong></p>
<br/>
<div id='smaller_grid'>
    <p>About us</p>
    <p>Our events</p>
    <p>Contact us</p>
    <p>How to give</p>
    <p>Give Aid</p>

   <p>Privacy Policy</p>
    <p>Testimonials</p>
    <p>Partner</p>
    <p>Join Us</p>
    <p>Counselling</p>
</div>
</div>
            <div className='four'>            
<strong><p id='footer_four_heading'>Newsletter</p></strong>
<p id='smallp'>You will be notified when something new will be happening.</p>
<div className='invite'>
<input type='email' placeholder='Email Address *'></input>
<button type='submit'>Send</button>
</div>
            </div>
            <div className='five'><p id='copyright'>Copyright &copy; {new Date().getFullYear()} RCN Glasgow. All rights reserved</p></div>
            <div className='six'><a href='#'>Privacy Policy</a></div>
        </div>
    )
}

export default Footer