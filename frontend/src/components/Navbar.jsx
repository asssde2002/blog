import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <Link to="/" className="title">Arthur Universe</Link>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/posts/">Post</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar; 
