import React, {useRef, useState} from 'react'
import '../styles/hamburger.css'
import List from './List'

function HamburgerLines({displayFunc}) {

const [showUl, setUl] = useState(false)
const styles = {"color":"black", "background":"beige", "padding":"50px", "box-sizing":"border-box", "text-align":"center","list-style-type":"none", "position":"relative"}
const onSet = () => {
  setUl((prev) => {
    if (prev){
      return false
    }
    return true
  })
}
const reset = () => {
  setUl(false)
}

  return (
    <div className='hamburger_nav'>
    <div onClick={onSet} className="hamburger">
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
    
        </div>
    

    {showUl&&<List Cstyle={styles} lsClose={reset} />}
</div>


  )
}

export default HamburgerLines