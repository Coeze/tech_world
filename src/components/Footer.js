import React from 'react'
import '../styles/footer.css'

function Footer() {
    return (
        <div className = 'bottom_grid'>
            <div className='one'> 
            <img className='footimg' src='https://cdn.pixabay.com/photo/2013/07/12/15/55/laurel-wreath-150577_1280.png' />
            </div>
            <div className='two'>
                
<p><strong>Address Location</strong></p>
<p>Lorem ipsum dolor sit amet consectetur </p>
<p><strong>Phone:</strong>Lorem ipsum dolor sit amet consectetur </p>
<p><strong>Email:</strong>Lorem ipsum dolor sit amet consectetur </p>
<p><strong>Lorem ipsum:</strong> Lorem ipsum dolor sit amet consectetur </p>


            </div>
            <div className='three'>
<p id='footer_three_heading'><strong>Quick Links</strong></p>
<br/>
<div id='smaller_grid'>
    <p>Lorem ipsum </p>
    <p>Lorem ipsum </p>
    <p>Lorem ipsum </p>
    <p>Lorem ipsum </p>
    <p>Lorem ipsum </p>

   <p>Lorem ipsum </p>
    <p>Lorem ipsum </p>
    <p>Lorem ipsum </p>
    <p>Lorem ipsum </p>
    <p>Lorem ipsum </p>
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
            <div className='five'><p id='copyright'>Copyright &copy; {new Date().getFullYear()} Lorem ipsum. All rights reserved</p></div>
            <div className='six'><a href='#'>Privacy Policy</a></div>
        </div>
    )
}

export default Footer