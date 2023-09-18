import React from "react";
import Topbar from "./Topbar";
import Testimonial from "./Testimonial";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Navbar_hero(){


const navigate =useNavigate();


const destinationare =()=>{
  

  navigate("/destination");
// alert("amit")
}
















return(
<>


{/* Navbar & Hero Start */}
<div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href className="navbar-brand p-0">
        <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3" />Tourist</h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <NavLink to="/" className="nav-item nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-item nav-link">About</NavLink>
          <NavLink to="/services" className="nav-item nav-link">Services</NavLink>
          {/* <NavLink to="/pakage" className="nav-item nav-link">Packages</NavLink> */}
          <NavLink to="/booking" className="nav-item nav-link">Booking</NavLink>
          <div className="nav-item dropdown">
            <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</div>
            <div className="dropdown-menu m-0">
              <NavLink to="/destination" className="dropdown-item">Destination</NavLink>
              {/* <NavLink to="/booking" className="dropdown-item">Booking</NavLink> */}
              <NavLink to="/team" className="dropdown-item">Travel Guides</NavLink>
              <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
              {/* <NavLink to="404.html" className="dropdown-item">404 Page</NavLink> */}
            </div>
          </div>
          {/* <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink> */}
        </div>
        <a href className="btn btn-primary rounded-pill py-2 px-4">Register</a>
      </div>
    </nav>
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
            <p className="fs-4 text-white mb-4 animated slideInDown"></p>
            <div className="position-relative w-75 mx-auto animated slideInDown">
              <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="CLICK ON THE SEARCH BAR TO SEE THE LOCATION" />
              <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" onClick={destinationare} style={{marginTop: 7}}>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}

  <Testimonial/>
</>



);


}

export default Navbar_hero;