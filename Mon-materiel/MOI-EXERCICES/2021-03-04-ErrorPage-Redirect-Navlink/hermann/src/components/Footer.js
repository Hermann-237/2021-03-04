import React from 'react'
import {Link} from "react-router-dom"
const Footer = () => {
    return (
        <div className="footer bg-info">
            <div className="d-flex justify-content-center">
            <Link className="nav-link text-dark" to="/">Home</Link>
            <Link className="nav-link text-dark" to="/products">Products</Link>
            <Link className="nav-link text-dark" to="/contact">Contact</Link>
            <Link className="nav-link text-dark" to="/login">Login</Link>
            <Link className="nav-link text-dark" to="/register">Register</Link>
            </div>
            <p className="text-center text-primary">Copyright Dci-2021</p>
        </div>
    )
}

export default Footer
