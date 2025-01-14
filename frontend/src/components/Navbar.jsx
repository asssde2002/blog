import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <NavLink to="/" className="title">Arthur Universe</NavLink>
            <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/posts/">Post</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar; 
