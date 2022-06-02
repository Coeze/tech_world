import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import MainDonate from '../components/MainDonate'
import Footer from '../components/Footer'

function Donate() {
    return (
        <div>
             <Nav />
             <Header text="DONATE"/>
             <MainDonate/>
             <Footer />
        </div>
    )
}

export default Donate
