import React, { Component } from "react";
import ReactDOM from "react-dom/client";


const heading = (
    <h1 id="title" key="2">
        Heading 2
    </h1>
);

// React Component
// - Functional Component - New
// Name of Component starts with  capital letter - it is not mandatory 

const HeaderComponent1 = () => {
    return (
        <h1>
            My React Functional Component
        </h1>
    );
}

const HeaderComponent2 = () => (
        <h1>
            My React Functional Component
        </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root

//async defer
root.render(heading);