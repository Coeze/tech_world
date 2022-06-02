import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import MainProducts from '../components/MainProducts'
import Footer from '../components/Footer'
import Scripture from '../components/Scripture'
import MainCheckOut from '../components/MainCheckOut'

function Products() {
    return (
        <div>
            <Nav />
            <Header text="PURCHASE"/>
            <MainProducts/>
            <MainCheckOut/>
            {/* <Scripture /> */}
            <Footer />
        </div>
    )
}

export default Products
