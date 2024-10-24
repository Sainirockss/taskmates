import React, { useEffect, useState } from 'react';
import Logo from "../assests/logo.png";
function Header() {
    const [Theme, SetTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        // Update the theme in localStorage
        localStorage.setItem("theme", Theme);
    
        // Apply the theme class to the document
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(Theme);              
    
    }, [Theme]);


    return (
        <header>
        <div className='logo'>
            <img src={Logo} alt='taskmate'></img>
            <span>TaskMate</span>

        </div>
        <div className="themeSelector">
            <span onClick={()=>SetTheme("light")} className={Theme==="light"? "activeTheme":"light"}></span>
            <span onClick={()=>SetTheme("medium")} className={Theme==="medium"? "medium activeTheme":"medium"}></span>
            <span onClick={()=>SetTheme("dark")} className={Theme==="dark" ? " dark activeTheme":"dark"}></span>
            <span onClick={()=>SetTheme("gOne")} className={Theme==="gOne"? "gOne activeTheme":"gOne"}></span>
            <span onClick={()=>SetTheme("gTwo")} className={Theme==="gTwo"? "gTwo activeTheme":"gTwo"}></span>
            <span onClick={()=>SetTheme("gThree")} className={Theme==="gThree" ? " gThree activeTheme":"gThree"}></span>
        </div>
        </header>
    )
}
 
export default Header;
