import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../images/logo.png";
import useOnline from "../utils/useOnline";


const Title = () => (
    <a href="/" className="flex flex-wrap w-9/10">
        <img
            className="h-24 p-2 rounded-lg"
            alt="logo"
            src={Logo}
        />
        <figcaption>SpeedyDine</figcaption>
    </a>
);


// Header Compoonent 
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10 ">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-2">Cart</li>
                </ul>

            </div>
            <h1>{isOnline? '☑️':'🔴'}</h1>
            {
                isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>
            }
        </div>
    );
}


export default Header;