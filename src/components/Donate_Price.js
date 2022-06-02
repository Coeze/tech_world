import React from 'react'
import "../styles/dp.css"

function Donate_Price({price}) {
    const styles = {"padding":"10px", "cursor":"pointer", "border-radius":"5px", "margin": "10px"}
    const style_c = {"border-radius":"50%"}

  return (
    <div style={styles}>
   <input style = {style_c} type="checkbox"/>
    £{price}
    </div>
  )
}

export default Donate_Price