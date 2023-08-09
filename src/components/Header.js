import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../images/logo.png";
import useOnline from "../utils/useOnline";


const Title = () => (
    <a href="/">
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

    const cartItem = useSelector(store => store.cart.items);
    const totalItemsCount = useSelector(store => store.cart.totalItemsCount);

    return (
        <div className="flex flex-wrap justify-between bg-pink-50 shadow-lg">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10 ">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>

                    <li className="px-2"><Link to="/cart">Cart- {totalItemsCount} items</Link></li>
                </ul>

            </div>
            <h1>{isOnline? '☑️':'🔴'}</h1>
            {
                isLoggedIn ? <button onClick={() => setIsLoggedIn()}>Logout</button> : <button onClick={() => setIsLoggedIn()}><Link to="/login">Login</Link></button>
            }
        </div>
    );
}


export default Header;