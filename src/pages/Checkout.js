import React from 'react'
import {basketItems} from '../components/Basket'
import MainCheckOut from '../components/MainCheckOut'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Scripture from '../components/Scripture'

function Checkout() {
    
    return (
        <>
        <Header>
        <Nav />
       </Header>
        <MainCheckOut />
        <Scripture />
        <Footer />
        </>
    )
}

export default Checkout
