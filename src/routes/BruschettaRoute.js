import React from 'react'
import Bruschetta from '../components/Bruschetta'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function BruschettaRoute() {
  return (
    <div>
      <Navbar/>
        <Bruschetta/>
      <Footer/>
    </div>
  )
}

export default BruschettaRoute