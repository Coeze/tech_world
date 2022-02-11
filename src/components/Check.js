import React, {useContext, useEffect} from 'react'
import '../styles/Check.css'
import { itemContext } from './basket_item'
import CheckInput from './checkoutInput'
import {ides} from './MainProducts'


function Check({title, url}) {

    const [itemNumber, setNumber] = useContext(itemContext)

    return (
        
        <div className='check'>
            <img src={url} alt='book'/>
            <p>{title}</p>
            {itemNumber["item_0"]?<CheckInput values={itemNumber["item_0"]}/>:""}
            {itemNumber["item_1"]?<CheckInput values={itemNumber["item_1"]}/>:""}
            {itemNumber["item_2"]?<CheckInput values={itemNumber["item_2"]}/>:""}
            {itemNumber["item_3"]?<CheckInput values={itemNumber["item_3"]}/>:""}
            {itemNumber["item_4"]?<CheckInput values={itemNumber["item_4"]}/>:""}
           
            
            
        </div>
        
    )
}

export default Check
