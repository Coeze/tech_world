import React from 'react'
import '../styles/GeneralHeader.css'

function GeneralHeader({children}) {
    return (
        <>
        <div className='generalHeader'>
        {children}
        </div>
        </>
    )
}

export default GeneralHeader
