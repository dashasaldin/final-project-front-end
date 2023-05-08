import React from "react";
import logo from "./components/images/logo.png"



const Header = () => {
    return (
        <header>
            <meta name="description" content="Little Lemon is a family-owned restaurant in Chicago, IL"/>
            <meta name="og:title" content="Little Lemon webpage"/>
            <meta name="og:description" content="Webpage of Little Lemon restaurant"/>
            <meta name="og:image" content="components/images/restaurant.jpg"/>
            <img src={logo} alt="Little Lemon logo"></img>
        </header>
    )
}




export default Header;