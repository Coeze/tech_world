import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {basketContext} from './Basket'

function List({Cstyle, lsClose}) {
const closes = {"position":"absolute", "right":"50px", "cursor":"pointer"}
const styles = {'text-decoration': 'none', 'color':'black'}
const [noOfBasketItems, setNumber] = useContext(basketContext)
  return (
    <ul style={Cstyle}>
<span onClick={lsClose} style={closes} class="material-icons">close</span>
<Link to ='/' style={styles}>
                <li>Home</li>
            </Link>
                <Link to ='/contact' style={styles}>
                <li>Contact</li>
                </Link>
                <Link to ='/products' style={styles}>
                <li>Products</li>
                </Link>
                <Link to ='/donate' style={styles}>
                <li>Donate</li>
                </Link>
                <Link to='/checkout' style={styles}>
                <li><span class="material-icons">shopping_basket</span>{noOfBasketItems}</li>
                </Link>
               
</ul>
  )
}

export default List