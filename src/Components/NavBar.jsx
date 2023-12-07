import { Badge } from "@mui/material";
import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Tienda en Linea
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to='/' className="nav-link active" aria-current="page" href="#">
                  Compras
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/carrito'className="nav-link" href="#">
                  Carrito
                </NavLink>
              </li>
              
            </ul>
          </div>
        
            <NavLink to="/Cartwidget.jsx">
            <Badge badgeContent={4} color="primary">
              <ShoppingCart color="action" />
            </Badge>
            </NavLink>
          
        </div>
      </nav>
    </>
  );
};

export default NavBar;
