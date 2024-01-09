import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>

          <Link activeClassName="active" className="nav-link" to="/faqs">FAQ</Link>
                    
          <Link exact activeClassName="active" className="nav-link" to="/contacts">Contact Us</Link>     
                          
          <Link activeClassName="active" className="nav-link" to="/termofuse">Terms of Use</Link>

          <Link activeClassName="active" className="flex-align-right" to="/copyright">&copy; 2023| Culinary Chronicles: A Journey Through Taste</Link>
   
</footer>
  )
}

export default Footer