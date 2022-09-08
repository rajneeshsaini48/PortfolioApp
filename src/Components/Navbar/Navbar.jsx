import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name" id="Home">Mr.Raj</div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style = {{listStyleType:"none"}}>

            <Link spy={true} to="Navbar" smooth={true} activeClass = "activeclass" >
            <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true} activeClass = "activeclass" >
            <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true} activeClass = "activeclass" >
            <li>Exprience</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true} activeClass = "activeclass" >
            <li>Portfolio</li>
            </Link>
            <Link spy={true} to="Testimonials" smooth={true} >
            <li>Testimonials</li>
            </Link>
          </ul>
        </div>
      </div>
      <Link spy={true} to="Contact" smooth={true} activeClass = "activeclass" >
      <button className="button n-button">Contact</button>
      </Link>
    </div>
  );
};

export default Navbar;
