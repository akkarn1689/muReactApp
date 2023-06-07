import React, { Component } from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
    <h1 id="title" key="2">
        Heading 2
    </h1>
);



const HeaderComponent = () => {
    return (
        <div>
            {Title()}
            <h2>My React Functional Component</h2>
            <h2> This is a h2 tag</h2>
        </div>
    );
}






const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root

//async defer
root.render(<HeaderComponent />);