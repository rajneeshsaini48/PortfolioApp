import React from "react";
import Card from "../Card/Card";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Resume from "./Rajneesh Kumar.pdf"
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
const transition = {duration:1 ,type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left Side */}

      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit
          eaque <br /> Delectus pariatur consequuntur,dicta blanditiis velit
          voluptate cumque Molestias.
        </span>
        <a href={Resume} download>
        <button className="button s-button">Dowenload CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>

      <div className="cards">
        <motion.div
        whileInView={{left: '14rem'}}
        initial  = {{left: '25%'}}
        transition = {transition}
        
        style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"PhotoShop, Adobe, Sketch, Figma,Adobe "}
          />
        </motion.div>
        <motion.div 
         whileInView={{top: '12rem', left: '-4rem'}}
         initial  = {{left: '25%'}}
         transition = {transition}
        style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, javaScript, React, Node,MongoDB"}
          />
        </motion.div>
        <motion.div 
         whileInView={{top: '19rem',left: '12rem'}}
         initial  = {{left: '25%'}}
         transition = {transition}
        
        style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
