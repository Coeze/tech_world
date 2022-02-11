import React from 'react'
import '../styles/series.css'

function Series() {
    return (
        <div className='series'>
        {/* Add a carousel here instead of the image element using bootstrap, it should have four images of the four series. */}
            <img src='https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_1280.jpg' className='book_series' alt='book'/>
           
            <div className='series_list'>
            <p id='seriesp'>Four Power Packed Series to assist you in your pursuit of Christ.</p>
            <ul>
                <li>Series 1: The Unbelievers Series</li>
                <li>Series 2: Living the Life of God</li>
                <li>Series 3: Discipleship</li>
                <li>Series 4: Glorification</li>
            </ul>
            </div>
        </div>
    )
}

export default Series
