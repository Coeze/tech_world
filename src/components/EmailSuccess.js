import React from 'react'

function EmailSuccess({suc}) {
const suc_div = {"display":"flex", "align-items":"center", "justify-content":"space-around", "background":"green", "width":"400px", "padding":"40px", "border-radius":"25px"}
const btn_suc = {"padding":"10px" ,"cursor":"pointer", "background":"whitesmoke", "border":"none"}

  return (
    <div style={suc_div}>
        <p>Your email has been sent!</p>
        <button onClick={suc} style={btn_suc}>close</button>
    </div>
  )
}

export default EmailSuccess