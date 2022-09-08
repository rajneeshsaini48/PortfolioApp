import React from 'react'
import "./Works.css"
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'


const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
         <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>Works for All These</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit
           <br />
            Delectus pariatur consequuntur Lorem ipsum dolor sit.
             <br /> 
             dicta blanditiis velit  voluptate cumque Molestias
             
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        
        <Link spy={true} to="Contact" smooth={true} activeClass = "activeclass" >
        <button className="button s-button">Hire Me</button>
        </Link>
    
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>

      {/* Right side  */}

      <div className="w-right">
        <motion.div
        initial = {{rotate:45}}
        whileInView = {{rotate:0}}
        viewport = {{margin: '-40px'}}
        transition={{duration:3.5,type:'spring'}}
        
        className="w-maincircle">
            <div className="w-seccircle">
                <img src={Upwork} alt="" />               

            </div>
            <div className="w-seccircle">
                <img src={Fiverr} alt="" />               

            </div>
            <div className="w-seccircle">
                <img src={Amazon} alt="" />               

            </div>
            <div className="w-seccircle">
                <img src={Shopify} alt="" />               

            </div>
            <div className="w-seccircle">
                <img src={Facebook} alt="" />               

            </div>
        </motion.div>

        {/* bacground Circles */}
        <div className="w-backcircle bluecircle"></div>
        <div className="w-backcircle yellowcircle"></div>
      </div>      
    </div>
  )
}

export default Works