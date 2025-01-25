import React from "react";
import "./navBar.scss";
const NavBar: React.FC = () => {
  return (
    <>
    <nav>
      <img src="./imgs/logo-light.svg" alt="logo"  />
      <ul className="nav-details">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Instructional Design</a></li>
        <li><a href="#">eLearning Development</a></li>
        <li><a href="#">eLearning Price Quote</a></li>
        <li><a href="#">eLearning Packages</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </nav>
    </>
  );
};
export default NavBar;