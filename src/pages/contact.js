import React from 'react'
import Nav from '../components/Nav'
import ContactForm from '../components/contactForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

function contact() {
    return (
        <>
            <Header text="CONTACT">     
            <Nav />
            </Header>  
            <ContactForm />
            <Footer />
        </>
    )
}

export default contact
