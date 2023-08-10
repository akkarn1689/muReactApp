import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../context/UserAuthContext";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { logIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        // Here you can add your sign-up logic, such as making an API call to create a new user
        try {
            await logIn(email, password);
            navigate("/")
        } catch (err) {
            setError(err.message);
        }

        // console.log('Email:', email);
        // console.log('Password:', password);
        // Reset the form fields

        setEmail('');
        setPassword('');

    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        className="border border-black"
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        className="border border-black"
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <hr />
                <button>login with google</button>
                <hr />
                <div>
                    Don't have an account?   <Link to="/signup">Sign up</Link>
                </div>
            </form>
        </div>
    );
};


export default Login;