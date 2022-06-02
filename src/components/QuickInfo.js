import React from 'react'
import '../styles/quickInfo.css'
import {Link} from 'react-router-dom'

function QuickInfo() {
const url = 'https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_1280.jpg'
// const url2 = 'https://cdn.pixabay.com/photo/2014/12/22/00/07/tree-576847__480.png'

    return (
        <div className='quickInfo'>
          <img src={url} className='tree' alt='tree'/> 
          {/* <img src='..\..\images\tree-1716991_1920.png' className='tree' alt='tree'/> */}
          <div>
          <p className='info_main_head'>Welcome to <span id='specifc'>TECH WORLD</span></p>
          <p className='quickInfoP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique vehicula fringilla. Sed lacinia augue ut orci varius, at vestibulum turpis tristique. Fusce tincidunt quam ac nibh commodo luctus. Maecenas egestas, dolor sed bibendum iaculis, justo enim tempor velit, ac consequat eros lectus et erat. Praesent pharetra blandit fringilla. Maecenas eget mi enim. Aliquam in odio eu purus egestas ultrices. Vestibulum consequat eu elit ac iaculis. Etiam ac mattis nunc. Vestibulum varius, nulla pharetra suscipit luctus, odio neque condimentum mauris, at odio.</p>
         
          {/* <Link to='/about'>
          <button id='more_info'>Learn More</button>
          </Link> */}
        </div>
        </div>
    )
}

export default QuickInfo
