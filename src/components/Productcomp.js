import React, {useContext, useState} from 'react'
import '../styles/productcomp.css'
import { basketContext, basketItems } from './Basket'
import {name} from '../components/MainProducts'
import { itemContext } from './basket_item'



function Productcomp({url, title, price, basketHandler, ide}) {
    // const [number, setNumber] = useContext(basketContext)
    const [itemNumber, setNumber] = useContext(itemContext)

    
    return (
        <div className='productcomp'>
           <img src={url} className='prod_imgs'/>
           <span className='book_title'>{title}</span>
           <span className='book_title_price'>{price}</span>
           
          <form className={ide} onSubmit={basketHandler} id={title}>
          <button type='Add' className='add_button'>Add to Basket</button>
          <input className='number_prods' type='number' value={itemNumber[ide]}></input>
          </form>
        </div>
    )
}

export default Productcomp
