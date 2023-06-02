import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Specials } from "./Specials";
import { Footer } from "./Footer";

export const Homepage = () => {
    return(
        <>
        <Header />
        <Hero />
        <Specials />
        <Footer />
        </>

    )
}