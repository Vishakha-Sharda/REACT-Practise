import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../assets/pizza.jpeg"
import '../styles/home.css'
function Home() {
  return (
    <div className='home'  style={{backgroundImage:`url(${BannerImage})`}}>
    
    <div className='headerContainer'>

<h1>Uncle's Pizza</h1>
<p>Eat pizza and repeat</p>
<Link to ='/menu'>
<button>Order Now</button>
</Link>
    </div>
    </div>  )
}

export default Home
