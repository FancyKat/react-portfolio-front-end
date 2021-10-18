import React, { useState } from "react";
import { ReactComponent as GitIcon } from "./assets/github.svg";
import { ReactComponent as TwitIcon } from "./assets/twitter.svg";
import { ReactComponent as LinkIcon } from "./assets/linkedin.svg";
import "./style/footer.css";


const Footer = () => {
  return (
    <div>
      <footer className="footer">
            <div className="container">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <LinkIcon className="social-link" href="https://www.google.com/"/>
                    </li>
                    <li className="list-inline-item">
                        <TwitIcon className="social-link" href="https://www.google.com/"/>
                    </li>
                    <li className="list-inline-item">
                        <GitIcon className="social-link"  href="https://github.com/FancyKat"/>
                    </li>
                </ul>
                <p className="author">Copyright &copy; FancyKat</p>
            </div>
        </footer>
    </div>
  );
};

export default Footer;