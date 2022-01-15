import React, {useContext} from 'react'
import {basketContext} from '../components/Basket'
import Header from '../components/Header'
import Nav from '../components/Nav'
import QuickInfo from '../components/QuickInfo'
import Banner from '../components/Banner'
import Series from '../components/series'
import Scripture from '../components/Scripture'
import Form from '../components/Form'
import Footer from '../components/Footer'

function Home() {
    const [value, setValues] = useContext(basketContext)

    return (
        <>
        <Header >
        <Nav />
        </Header>
        <QuickInfo />
        <Banner />
        <Series />
        <Form />
        <Scripture />
       
        <Footer />
        </>
    )
}

export default Home
