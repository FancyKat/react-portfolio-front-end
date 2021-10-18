import React, { useState } from "react";
// import { ReactComponent as CloseMenu } from "./assets/x.svg";
// import { ReactComponent as MenuIcon } from "./assets/menu.svg";
// import { ReactComponent as Logo } from "./assets/logo.svg";
import Sidebar from "./Sidebar"
import "./style/header.css";

const Header = () => {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  
  return (
    <div>
      <Sidebar />
        <header className="masthead">
            <div className="container">
                <h1 className="mb-1">FancyKat Studios</h1>
                <h3 className="mb-5"><em>Love What You Do Everyday!!!</em></h3>
            </div>
        </header>
    </div>
  );
};

export default Header;
