import React from 'react'
import ClamDam from '../components/ClamDam'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ClamDamRoute() {
  return (
    <div>
      <Navbar/>
        <ClamDam/>
      <Footer/>
    </div>
  )
}

export default ClamDamRoute