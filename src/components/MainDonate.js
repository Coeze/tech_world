import React from 'react'
import DonatePrice from './Donate_Price'
import '../styles/main_donate.css'

function MainDonate() {
let prices = [5, 10, 20, 50, 100]
const styles = {"padding": "10px", "border-radius": "10px", "max-width": "300px", "outline": "none", "border":"none"}
const btn_styles = {"padding": "10px", "border-radius": "10px", "background":"salmon", "border":"none", "cursor":"pointer"}

return (
    <>
    <div className='main_donate'>
    <div className='fh'>
        <h1>Help Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis </p>
    </div>

    <div className='sh'>
    <h1>Thank you</h1>
    {/* {prices.map((el) => {
        return <DonatePrice price = {el} />
    })} */}
<div>
    <div>
    <p>Name</p>
    <input style={styles} type="text"/>
    </div>
</div>
    <div>
    <p>Email</p>
    <input style={styles} type="email"/>
    </div>

    <div className='prices_div'>
    £<input type="text" id="amount_in" placeholder="amount"/>
    </div>
    
    <button style={btn_styles} type='submit'>Give</button>
    </div>
    </div>
    </>
  )
}

export default MainDonate