import React from "react";
import { Homepage } from "./Homepage";
import { BookingPage } from "./BookingPage";
import { Routes, Route} from "react-router-dom";

export const Main = () => {
    return (
    <Routes> 
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
    )
}

