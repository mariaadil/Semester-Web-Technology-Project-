import React from 'react'
import RecipeDetailPage from '../components/chaplikebab'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function kabab() {
  return (
    <div>
      <Navbar/>
        <RecipeDetailPage/>
      <Footer/>
    </div>
  )
}
