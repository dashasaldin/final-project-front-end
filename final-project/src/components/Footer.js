import React from "react";
import logo from "./components/images/logo.png";
import Nav from "./components/Nav";

const Footer = () => {
    return (
        <footer>
            <img src= {logo} alt = "Little Lemon logo"></img>
            <div>
                <p>
                    Address <br />
                    Phone number <br />
                    Email
                </p>
            </div>
            <div>
                <link>Social media</link>
            </div>

        </footer>
    )
}

export default Footer;