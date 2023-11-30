import React from 'react'
import '../styles/about.css'
import MultiplePizza from '../assets/multiplePizzas.jpeg'
function About() {
  return (
    <div className='about'>
    <div className='aboutTop'
    style={{backgroundImage:`url(${MultiplePizza})`}}
    >

    </div>
    <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>
        A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premise.The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now – save room for dessert! 
        </p>
    </div>
      
    </div>
  )
}

export default About
