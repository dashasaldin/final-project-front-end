import React from "react";
import { Header } from "./Header";
import { BookingForm } from "./BookingForm";

export const BookingPage  = () => {
    return (
        <>
        <Header />
        <section className="booking">
            <h1>Little Lemon</h1>
            <h2 >Chicago</h2>
            <h3 >Find a table for every occasion</h3>
            <BookingForm />
        </section>
        </>
    )
}