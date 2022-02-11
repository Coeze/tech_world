import React, {createContext, useState} from 'react'

export const itemContext = createContext()

function BasketItem({children}) {

    const [itemNumber, setNumber] = useState({'item_0':0, 'item_1': 0, 'item_2': 0, 'item_3':0, 'item_4':0})

    return (
        <itemContext.Provider value={[itemNumber, setNumber]}>
            {children}
        </itemContext.Provider>
    )
}

export default BasketItem
