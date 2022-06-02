import React from 'react'
import '../styles/series.css'

function Series() {
    return (
        <div className='series'>
        {/* Add a carousel here instead of the image element using bootstrap, it should have four images of the four series. */}
            <img src='https://images.unsplash.com/photo-1617802690992-15d93263d3a9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870' className='book_series' alt='book'/>
           
            <div className='series_list'>
            <p id='seriesp'>Molestiae quas vel sint commodi repudiandae.</p>
            <ul>
                <li>Lorem ipsum dolor sit </li>
                <li>Lorem ipsum dolor sit </li>
                <li>Lorem ipsum dolor sit </li>
                <li>Lorem ipsum dolor sit </li>
            </ul>
            </div>
        </div>
    )
}

export default Series
