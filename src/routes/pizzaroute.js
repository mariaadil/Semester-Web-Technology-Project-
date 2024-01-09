import React from 'react'
import Pizza from '../components/pizza'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Pizzaroute() {
  return (
    <div>
      <Navbar/>
        <Pizza/>
      <Footer/>
    </div>
  )
}
