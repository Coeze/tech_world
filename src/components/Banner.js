import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Banner.css'

function Banner() {
    
    return (
        <div className='main_banner'>
        <div>
        <p className='values'>What We Teach At Christ For All Youth</p>
        <p className='values_below'>Striving for the rebirth of apostolic christianity, together, heralding the revival of Jesus Christ.</p>
        <Link className='small_link' to='/about' style={{'text-decoration':'none', 'color':'black'}}
   >
        More About Us
        </Link>
        </div>
        <div className='sub_grid'>
            <div>
            <p className='small_grid_header'><span className='icon_sub_grid' class="material-icons">update</span>Our Vision</p>
            <p className='small_grid_text'>Restoring the apostolic order and Christianity as was seen <br/>in the days of the apostles of Jesus Christ in the scriptures</p>
            </div>
            <div>
            <p className='small_grid_header'><span className='icon_sub_grid' class="material-icons">sentiment_satisfied_alt</span>Our Mission</p>
            <p className='small_grid_text'>Striving for the rebirth of apostolic christianity, together,  <br/>heralding the revival of Jesus Christ.</p>
            </div>
            <div>
            <p className='small_grid_header'><span className='icon_sub_grid' class="material-icons">flag</span>Our Goal</p>
            <p className='small_grid_text'>Our goal is Christ and His Kingdom</p>
            </div>
            <div>
            <p className='small_grid_header'><span className='icon_sub_grid' class="material-icons">track_changes</span>Objective</p>
            <p className='small_grid_text'>For men to walk in their God ordained destinies</p>
            </div>
        </div>
        </div>
    )
}

export default Banner
