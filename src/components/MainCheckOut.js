import React from 'react'
import {items} from './items'
import {basketItems} from './Basket'
import Check from './Check'
import '../styles/MainCheckout.css'

export let productItems = []
let start = 0;
productItems.forEach((item) => {
    start+=item.price;
})

function MainCheckOut() {

productItems = items.filter((item) => {
   return basketItems.includes(item.title)
})



    return (
        <div className='main_check'>
        <div className='conditional'>
        <span id='check_head'>{productItems.length?'Your Items':'Your Basket is empty'}</span>
        {!productItems.length&&<span id='spanner' class="material-icons">sentiment_dissatisfied</span>}
        </div>
        <div className='p_chec1'>
        <div className='outer_check'>
            {productItems.map((item) => {
                return <Check title={item.title} url={item.url}/>
            })}
            </div>
            <div className='but_box'>
            {productItems.length?<button className='buy'>Checkout</button>:''}
            {productItems.length?<p className='total_price'><strong>Total: </strong>{`£${start}`}</p>:''}
            </div>
            </div>
        
        </div>
    )
}

export default MainCheckOut
