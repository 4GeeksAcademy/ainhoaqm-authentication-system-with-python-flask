import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const access_token = localStorage.getItem("access_token");

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Home</Link>
                <Link to="/signup" className="nav-link">Signup</Link>
                <Link to="/login" className="nav-link">Login</Link>
            </div>
        </nav>
    );
};
