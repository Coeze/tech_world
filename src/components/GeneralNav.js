import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { basketContext } from './Basket'
import '../styles/GeneralNav.css'

function GeneralNav() {
    const styles = {'text-decoration': 'none', 'color':'white', 'font-weight':'650'}
    const [noOfBasketItems, setNumber] = useContext(basketContext)
    return (
        <nav className='main_navs'>
            <ul className='main_nav_uls'>
            <Link to ='/' style={styles}>
                <li>Home</li>
            </Link>
            <Link to ='/about' style={styles}>
                <li>About</li>
                </Link>
                <Link to ='/contact' style={styles}>
                <li>Contact</li>
                </Link>
                <Link to ='/products' style={styles}>
                <li>Products</li>
                </Link>
                <Link to ='/donate' style={styles}>
                <li style={styles}>Donate</li>
                </Link>
                <li id='main_last'><span class="material-icons">shopping_basket</span>{noOfBasketItems}</li>
                </ul>
        </nav>
    )
}

export default GeneralNav
