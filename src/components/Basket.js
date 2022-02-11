import React, {useState, createContext} from 'react'

export const basketContext = createContext()
export const basketItems = [];

export default function Basket(props) {

    
    const [numberOfItems, setNumber] = useState(0);
    return (
        <basketContext.Provider value={[numberOfItems, setNumber]}>
            {props.children}
        </basketContext.Provider>
    )
}


