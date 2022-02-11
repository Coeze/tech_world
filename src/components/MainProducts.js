import React, {useContext} from 'react'
import '../styles/MainProducts.css'
import Productcomp from '../components/Productcomp'
import {items} from '../components/items'
import {basketContext, basketItems} from './Basket'
import { itemContext } from './basket_item'


export let name = 0;
export let ides = [];

function MainProducts() {
    
    const [numberBasket, setNumbers] = useContext(basketContext)
    const [itemNumber, setNumber] = useContext(itemContext)

   const basketHandler = (event) => {
       event.preventDefault()
       const bo = event.target.className;
    //    if (!ides.includes(bo)) {
    //        ides.push(bo)
    //     }else{
    //         ides.shift()
    //     }
    setNumbers((prev) => {
        return prev+1;
    })
 
    setNumber((previous) => {
        console.log({...previous, [bo]:itemNumber[event.target.className]+1 })
        return {...previous, [bo]:itemNumber[event.target.className]+1}
    })
    basketItems.push(event.target.id)
}
// const update = event => {
//     event.preventDefault()


// }


    return (
        <div className='mainProducts'>
        <p className='header_prods'>Available Items</p>
        <div className='mainprods'>
           {items.map((item, index) => {
               return <Productcomp title={item.title} ide={`item_${index}`} url={item.url} price={item.price} basketHandler={basketHandler}/>
           })}
        </div>
        </div>
    )
}

export default MainProducts
