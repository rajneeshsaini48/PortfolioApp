import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
// import Vactor1 from "../../img/Vector1.png";
// import Vactor2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
// import Thumbup from "../../img/thumbup.png";
// import Crown from "../../img/crown.png";
// import Glassesimoji from "../../img/glassesimoji.png";
// import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { useContext } from "react";
import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Intro = () => {
  // const transition = {duration : 2,type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id="Home">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white': ''}}>Hy! I Am</span>
          <span>
          <TypeAnimation
      sequence={[
        'Rajneesh Kumar',
        3000,
        'MERN Stack Developer',
        2000, 
        'Full Stack Developer', 
        2000, 
        'Web Designer',
        1000, 
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2rem' }}
    />
    </span>
          <span>
            I'm FullStak Developer and MERN Stak Developer.My passion for
            strong, <br /> unique design and Am also interested to learn new things. <br /> I
            always try to do my best and satisfied clients and fulfill there
            requirement.
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true} activeClass = "activeclass" >
        <button className="button i-button">Hire Me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/rajneeshsaini48">
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/rajneesh-kumar-raj12/">
          <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/rajsainiofficial_01/">
          <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        
        <motion.img
         initial = {{rotate:30}}
         whileInView = {{rotate:0}}
         viewport = {{margin: '-40px'}}
         transition={{duration:3.5,type:'spring'}}
        src={Boy} alt="" />
        {/* <motion.img
        initial = {{left: '-36%'}}
        whileInView = {{left: '-24%'}}
        transition = {transition}

         src={Glassesimoji} alt="" />
        <motion.div
        
        initial = {{top: "-4%",left: "74%"}}
        whileInView = {{left: "68%"}}
        transition = {transition}
        
        style={{ top: "-4%", left: "68%" }}
        className = 'floating-div'>
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
        initial = {{left:"9rem", top: "18rem"}}
        whileInView={{left: "0rem"}}
        transition = {transition}
        
        style={{ top: "18rem", left: "0rem" }}
        className = 'floating-div'>
          <FloatingDiv image={Thumbup} text1="Best Design" text2="Award" />
        </motion.div> */}
         
        <div className="blur" style={{background:"rgb(238 210 255) "}}></div>
        <div className="blur" style={{background:"#B7D4D9",top:'17rem',width:"21rem", height:"11rem",left:"-8rem"}}></div>
      </div>
    </div>
  );
};

export default Intro;
