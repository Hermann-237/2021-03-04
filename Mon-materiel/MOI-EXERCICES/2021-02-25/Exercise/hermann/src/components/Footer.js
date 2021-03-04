import React from 'react'

const Footer = () => {
    return (
        <div className="footer bg-info">
            <div className="d-flex justify-content-center">
            <a className="nav-link text-dark" href="/">Home</a>
            <a className="nav-link text-dark" href="/products">Products</a>
            <a className="nav-link text-dark" href="contact">Contact</a>
            <a className="nav-link text-dark" href="forum">Forum</a>
            </div>
            <p className="text-center text-primary">Copyright Dci-2021</p>
        </div>
    )
}

export default Footer
