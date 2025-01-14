import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <Link to="/" className="title">Arthur Universe</Link>
            <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/posts/">Post</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar; 
