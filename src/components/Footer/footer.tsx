import "./footer.scss";
import React from "react";
const Footer: React.FC = () => {
  return (
    <footer>
      <div id="footer-details">
        <figure>
          <img src="./imgs/logo-transparent.svg" alt="logo" />
          <figcaption>Taking learning to the next level</figcaption>
        </figure>
        <div className="footer-details-links">
          <ul>
            <li>
              <a href="#">Home eLearning </a>
            </li>
            <li>
              <a href="#">Price Quote Services</a>
            </li>
            <li>
              <a href="#">Instructional Design</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">eLearning Development</a>
            </li>
            <li>
              <a href="#">Mobile Learning</a>
            </li>
            <li>
              <a href="#">Product Training</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Custom eLearning</a>
            </li>
            <li>
              <a href="#">eLearning for Retail</a>
            </li>
            <li>
              <a href="#">eLearning Packages</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2016 eLearning Company</p>
      </div>
    </footer>
  );
};
export default Footer;
