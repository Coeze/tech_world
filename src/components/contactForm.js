import React, { useRef, useState } from 'react'
import '../styles/contactForm.css'
import emailjs from '@emailjs/browser';
import EmailSuccess from './EmailSuccess';

function ContactForm() {

    const [success, setSuccess] = useState(false)

    const center = {"width":"100%", "display":"flex", "justify-content":"center", "align-items":"center","padding":"50px"}

    const form = useRef();

    const closeSuccess = (e) => {
        e.preventDefault()
        setSuccess(false)
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ci8uxzf', 'template_skorzuq', form.current, 'Hi6EiPJOhsrAR_9-C')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setSuccess(true)
          e.target.reset()
      };

    return (
        <div className='form_wrap'>

<div style={center}>
        {success&&<EmailSuccess suc={closeSuccess} />}
        </div>   
       
        <form ref={form} onSubmit = {sendEmail} className='contactForm'>
        <p id='form_texth'>Contact Us</p>
        {/* <label htmlFor='name'>Name</label> */}
            <input type='text' name='name' required placeholder='First Name'/>
            {/* <label htmlFor='email'>Email</label> */}
            <input type='text' name='email'  required placeholder='Email'/>
            {/* <label htmlFor='number'>Mobile Number</label> */}
            <input type='number' name='number' placeholder='Mobile Number'/>
            {/* <label htmlFor='comment'>Additional Comment</label> */}

            <input type='text' name='subject'  required placeholder='Email Subject'/>

            <textarea id='te' name='message' rows='4' cols='50' placeholder='Your Message'/>
            <button type='submit'>Send</button>
            <p id='form_textb'>We'll be in contact with you as soon as possible.</p>
        </form>
        </div>
    )
}

export default ContactForm
