import React from 'react';
import { Link } from "react-router-dom";
import logo from './1-removebg-preview.png';

const navbarBrandStyle = {
    fontFamily: "Playwrite PL, cursive", // Replace with your desired font family
    fontWeight: 'bold', // Adjust font weight if needed
    fontSize: '1.5rem', // Adjust font size as needed
    textDecoration: 'none', // Remove underline from the link
    color: '#333', // Adjust text color
};

const logoStyle = {
    maxHeight: '40px', // Adjust the max height as per your requirement
    marginRight: '10px', // Optional: Add margin to the right of the logo
};

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Logo and Site Name */}
                <Link style={navbarBrandStyle} className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" className="navbar-logo" style={logoStyle} />
                    DevSpeak
                </Link>

                {/* Navbar Toggler for Mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
