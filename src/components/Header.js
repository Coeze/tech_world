import React from 'react'
import '../styles/header.css'

function Header({children, text}) {
    return (
        <div className='main_header_div'>
        {children}
        <div className='main_header_texts'>
        
            <p className='main_header'>{text}</p>
         </div>
        
        </div>
    )
}

export default Header
