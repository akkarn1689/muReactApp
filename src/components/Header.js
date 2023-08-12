import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../images/logo.png";
import useOnline from "../utils/useOnline";
import { useUserAuth } from "../context/UserAuthContext";
import HeaderShimmer from "./headerShimmer";


const Title = () => (
    <a href="/">
        <img
            className="h-24 p-2 rounded-lg"
            alt="logo"
            src={Logo}
        />
        <figcaption>InstaBites</figcaption>
    </a>
);


// Header Compoonent 
const Header = () => {
    let { user, logOut } = useUserAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const isOnline = useOnline();

    const cartItem = useSelector(store => store.cart.items);
    const totalItemsCount = useSelector(store => store.cart.totalItemsCount);

    useEffect(() => {
        // API call
        if (!user) {
            setIsLoggedIn(false);
        }
        else {
            setIsLoggedIn(true);
        }
        // Do error handling
    }, [user]);

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate('\login')
        } catch (err) {
            console.log(err);
        }
    }


    return !user? <HeaderShimmer />: (
        <div className="flex justify-center">
            <div className="flex items-center flex-wrap w-11/12 justify-between bg-pink-50 shadow-lg">
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
                <h1>{isOnline ? '☑️' : '🔴'}</h1>

                {
                    !isLoggedIn && user ? <button onClick={handleLogOut}>Logout</button> : <button onClick={() => setIsLoggedIn()}><Link to="/login">Login</Link></button>
                }

            </div>
        </div>
    );
}


export default Header;