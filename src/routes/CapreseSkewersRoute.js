import React from 'react'
import CapreseSkewers from '../components/CapreseSkewer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CapreseSkewersRoute() {
  return (
    <div>
      <Navbar/>
        <CapreseSkewers/>
      <Footer/>
    </div>
  )
}
