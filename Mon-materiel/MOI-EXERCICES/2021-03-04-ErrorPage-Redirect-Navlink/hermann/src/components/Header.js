import React from 'react'
import {NavLink} from "react-router-dom"
const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid container">
          <NavLink className="navbar-brand" to="/">
            <img src="/logo192.png" className="logo" alt=""/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link activess " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link activess" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link activess" to="/products/pc-0001">
                  ProductsArticleNo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link activess" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link activess" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link activess" to="/register">
                Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Header
