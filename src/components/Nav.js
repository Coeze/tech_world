import React, {useContext, useState} from 'react'
import '../styles/nav.css'
import {basketContext} from './Basket'
import {Link} from 'react-router-dom'
import HamburgerLines from './HamburgerLines'


function Nav() {
    const styles = {'text-decoration': 'none', 'color':'white'}
    const [noOfBasketItems, setNumber] = useContext(basketContext)
    
    return (
        <nav className='main_nav'>
            {
                
            <ul className='main_nav_ul'>
            <Link to ='/' style={styles}>
                <li>Home</li>
            </Link>
            {/* <Link to ='/about' style={styles}>
                <li>About</li>
                </Link> */}
                <Link to ='/contact' style={styles}>
                <li>Contact</li>
                </Link>
                <Link to ='/products' style={styles}>
                <li>Products</li>
                </Link>
                <Link to ='/donate' style={styles}>
                <li id='main_donate' style={styles}>Donate</li>
                </Link>
                <Link to='/checkout' style={styles}>
                <li id='main_last'><span class="material-icons">shopping_basket</span>{noOfBasketItems}</li>
                </Link>
                </ul>
                }

                <HamburgerLines />
                
        </nav>
    )
}

export default Nav
