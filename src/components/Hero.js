import React from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
    const navigate = useNavigate();


    return (
        <section className="hero">
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are family owned Mediterranean restaurant, focused on traditional
                    recipes served with a modern twist</p>
            <button onClick={() => navigate('/booking')}>Reserve a table</button>
            </article>
            <div><img src= "images/restaurant.jpg" alt = "A cook making a dish"></img></div>
        </section>

    )
}