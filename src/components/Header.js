import React from 'react'
import '../styles/header.css'

function Header({children}) {
    return (
        <div className='main_header_div'>
        {children}
        <div className='main_header_texts'>
            <p className='main_header_top'>WELCOME TO</p>
            <p className='main_header_bottom'>CHRIST FOR ALL YOUTH</p>
         </div>
        
        </div>
    )
}

export default Header
