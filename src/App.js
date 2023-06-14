import bodyParser from "body-parser";
import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";



// Imports from constants.js



const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(<AppLayout />);  // HeaderComponent() will also work