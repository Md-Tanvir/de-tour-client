import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-white py-4">
      <div className="container">
        <div className="row gx-5 gy-5">
          {/* about us */}
          <div className="col-12 col-md-4">
            <h3>About Us</h3>
            <p>
              Travel from one place to another for different purposes is
              generally called travelling. People do not travel always for the
              same purposes. Someone travels to gain knowledge and experience,
              someone travels for pleasure, someone travels for business
              purposes etc. It has much educative value.
            </p>
          </div>
          {/* quick link */}
          <div className="col-12 col-md-4">
            <h3>Quick Links</h3>

            <NavLink to="/home">
              <li>Home</li>
            </NavLink>
            <NavLink to="/services">
              <li>Services</li>
            </NavLink>
            <NavLink to="/myOrders">
              <li>My Orders</li>
            </NavLink>
            <NavLink to="/addServices">
              <li>Add Services</li>
            </NavLink>
            <NavLink to="/manageOrders">
              <li>Manage All Orders</li>
            </NavLink>
          </div>
          {/* contact info */}
          <div className="col-12 col-md-4">
            <h3>Get Us</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> 21 Shyamoli, Sylhet
              Road, Dhaka-1203, Bangladesh
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> 10233, +88096529270100
            </p>
            <p>
              <i className="far fa-envelope"></i> info@detour.com ,
              detour@admin.com
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mb-0">
        Copyright © 2021. All Rights Reserved by detour.com
      </p>
    </div>
  );
};

export default Footer;
