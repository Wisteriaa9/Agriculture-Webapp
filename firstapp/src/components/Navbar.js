import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="header navbar navbar-expand-lg border border-dark border-top-0 border-left-0 border-right-0">
        <div className="container-fluid">
          <div className="logo">
            {/* <img className="navimg" src={img1} width='40px' alt="" /> */}
            <ul className="navbar-nav ">
              <li>
                <a className="nav-link ">
                  <b className="text-white">LETS_ENDORSE</b>
                </a>
              </li>
            </ul>
          </div>

          <div className="child1" id="navbarNav">
            <ul className="navbar-nav ">
            <li className="nav-item">
                <Link to="/aboutus" className="nav-link text-[white]">
                  <div className="text-white">Home</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link text-[white]">
                  <div className="text-white">Aboutus</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link text-[white]">
                  <div className="text-white">LogOut</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
