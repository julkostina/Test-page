import React from "react";
import "./navBar.scss";
const NavBar: React.FC = () => {
  return (
    <>
    <nav>
      <img src="./imgs/logo-light.svg" alt="logo"  />
      <ul className="nav-details">
        <li><a href="#">Home</a></li>
        <li><a href="#provided-services-search">Services</a></li>
        <li><a href="#instructional-design">Instructional Design</a></li>
        <li><a href="#footer-details">eLearning Development</a></li>
        <li><a href="#footer-details">eLearning Price Quote</a></li>
        <li><a href="#footer-details">eLearning Packages</a></li>
        <li><a href="#talk-about-section">Contact us</a></li>
      </ul>
    </nav>
    </>
  );
};
export default NavBar;