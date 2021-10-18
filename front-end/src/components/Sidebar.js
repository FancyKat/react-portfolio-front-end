import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
// import { ReactComponent as Logo } from "./assets/logo.svg";
// import PropTypes from "prop-types"
import "./style/sidebar.css";


const Sidebar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
    <div>
        <div className="menu-toggle" onClick={handleClick}>   
            <div className="hamburger-menu">
                {click ? ( 
                    <CloseMenu className="menu-icon" />
                ) : ( 
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
            <nav className={click ? "sidebar-wrapper active" : "sidebar-wrapper"}>
                <ul className="sidebar-nav">
                    <li class="sidebar-brand"><a href="https://www.google.com/">FancyKat Studios</a></li>
                    <li className="sidebar-nav-item" onClick={closeMenu}><a href="https://www.google.com/">Home</a></li>
                    <li className="sidebar-nav-item" onClick={closeMenu}><a href="https://www.google.com/">About</a></li>
                    <li className="sidebar-nav-item" onClick={closeMenu}><a href="https://www.google.com/">Services</a></li>                
                    <li className="sidebar-nav-item" onClick={closeMenu}><a href="https://www.google.com/">Portfolio</a></li>
                    <li className="sidebar-nav-item" onClick={closeMenu}><a href="https://www.google.com/">Contact</a></li>                    
                </ul>
            </nav>
    </div>    
      
 
    );
};

export default Sidebar;