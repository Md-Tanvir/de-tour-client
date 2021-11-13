import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
import logo from "../../img/logo.png";

const Header = () => {
  const { logOut, user } = useAuth();
  const style = {
    textDecoration: "none",
    marginRight: "25px",
  };
  return (
    <div className="main-menu mb-4 py-2">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Main Logo */}
          <Link style={{ textDecoration: "none", width: "20%" }} to="/home">
            <div className="navbar-brand">
              <img src={logo} className="main-logo" alt="" />
              <p>De Tour</p>
            </div>
          </Link>
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
            {/* Navigation Area */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <NavLink style={style} to="/home">
                <li className="nav-item items">Home</li>
              </NavLink>
              <NavLink style={style} to="/services">
                <li className="nav-item items">Services</li>
              </NavLink>
              <NavLink style={style} to="/myOrders">
                <li className="nav-item items">My Orders</li>
              </NavLink>
              {user.email ? (
                <>
                  <NavLink style={style} to="/addServices">
                    <li className="nav-item items">Add Services</li>
                  </NavLink>
                  <NavLink style={style} to="/manageOrders">
                    <li className="nav-item items">Manage All Orders</li>
                  </NavLink>
                </>
              ) : (
                <></>
              )}

              {user?.email && <span>{user.displayName || user.email}</span>}
              {user?.email ? (
                <span
                  style={{
                    marginLeft: "15px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                  onClick={logOut}
                >
                  <i className="fas fa-sign-out-alt"></i>
                </span>
              ) : (
                <NavLink style={style} to="/login">
                  <li className="nav-item items">Login</li>
                </NavLink>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
