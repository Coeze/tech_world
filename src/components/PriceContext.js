import React, {createContext, useState} from 'react'

export const PriceContext = createContext()

function Price({children}) {

    const [price, setPrice] = useState(0);

  return (
<PriceContext.Provider value={[price, setPrice]}>
    {children}
</PriceContext.Provider>
  )
}

export default Price