import React from 'react'
import '../styles/contactForm.css'

function contactForm() {
    return (
        
        <form className='contactForm'>
        <p id='form_texth'>Contact Us</p>
        {/* <label htmlFor='name'>Name</label> */}
            <input type='text' name='name' required placeholder='First Name'/>
            {/* <label htmlFor='email'>Email</label> */}
            <input type='text' name='email'  required placeholder='Email'/>
            {/* <label htmlFor='number'>Mobile Number</label> */}
            <input type='number' name='number' placeholder='Mobile Number'/>
            {/* <label htmlFor='comment'>Additional Comment</label> */}
            <textarea id='te' name='comment' rows='4' cols='50' placeholder='Additional Comments'/>
            <button type='submit'>Submit</button>
            <p id='form_textb'>We'll be in contact with you as soon as possible.</p>
        </form>
        
    )
}

export default contactForm
