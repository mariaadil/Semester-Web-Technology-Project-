import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const Navbar = () => {
    return (
        <section>
        <div className='tags'>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                <h1 className="navbar-brand" href="webs">
                    <img src="https://www.asweetpeachef.com/wp-content/uploads/2014/04/SweetPeaChef_HowToFoodBlog_ver1_720x980.jpg" alt="logo" width="30" height="24" className="d-inline-block align-text-top"/>
                        Culinary Chronicles: A Journey Through Tastes
                </h1>
                       
                    <Link activeClassName="active" className="nav-link" to="/">Menu</Link>
                    
                    <Link exact activeClassName="active" className="nav-link" to="/home">Home</Link>     
                          
                    <Link activeClassName="active" className="nav-link" to="/aboutus">AboutUs</Link>
                           
                </div>
            </nav>
        </div>
        </section>
    );
};

export default Navbar;