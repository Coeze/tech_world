import React from 'react'
import '../styles/Form.css'

function Form() {
    return (
        <div className='form'>
        <form className='actual'>
        <p className='form_text'>Join Our Community</p>
        <p id='form_texts'>Enter your email address to register to our newsletter subscription delivered on regular basis!</p>
        
           <input name='username' type="text" placeholder='Name'></input> 
           
           <input name='email' type="email" placeholder='Email'></input> 
          
           <button id='btn' type='submit'>Send</button>
        </form>
        </div>
    )
}

export default Form
