import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Banner.css'

function Banner() {
    
    return (
        <div className='main_banner'>
        <div>
        <p className='values'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        <p className='values_below'>Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
        <Link className='small_link' to='/about' style={{'text-decoration':'none', 'color':'black'}}
   >
        molestiae quas vel
        </Link>
        </div>
        <div className='sub_grid'>
            <div>
            <p className='small_grid_header'><span className='icon_sub_grid' class="material-icons">update</span>Lorem ipsum</p>
            <p className='small_grid_text'>numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium <br/>fugiat iusto fuga praesentium</p>
            </div>
            <div>
            <p className='small_grid_header'><span className='icon_sub_grid' class="material-icons">sentiment_satisfied_alt</span>Lorem ipsum</p>
            <p className='small_grid_text'>blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium  <br/>fugiat iusto fuga praesentium.</p>
            </div>
            <div>
            <p className='small_grid_header'><span className='icon_sub_grid' class="material-icons">flag</span>Lorem ipsum</p>
            <p className='small_grid_text'>numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga </p>
            </div>
            <div>
            <p className='small_grid_header'><span className='icon_sub_grid' class="material-icons">track_changes</span>Lorem</p>
            <p className='small_grid_text'>numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga </p>
            </div>
        </div>
        </div>
    )
}

export default Banner
