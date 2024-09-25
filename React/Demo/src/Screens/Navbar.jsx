/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import '../Screens/navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/add-movie">Add Movie</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
