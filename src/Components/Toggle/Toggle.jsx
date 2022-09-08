import React from 'react'
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import "./Toggle.css"
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = ()=>{
      theme.dispatch({type:"toggle"})
    }
   

  return (
    <div className="toggle" onClick={handleClick}>
        <Moon/>
        <Sun/>
        <div className="t-button" 
        
        style={darkMode?{left : "9.8rem"}: {right : "55.6rem"}}>
            
        

        </div>

    </div>
  )
}

export default Toggle