import bodyParser from "body-parser";
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantPage from "./components/RestaurantPage";
import Error from "./components/Error";
import Profile from "./components/Profile";


const AppLayout = () => {
    return (
        <>
            <Header />
            {/* {Outlet} */}
            <Outlet />
            <Footer />
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        // path: "/profile", // localhost:1234/profile
                        path: "profile", // parentPath/{path}
                        element: <Profile/>,
                    }
                ],
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantPage />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(<RouterProvider router={appRouter} />);  // HeaderComponent() will also work