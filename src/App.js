import bodyParser from "body-parser";
import React, { Component, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantPage from "./components/RestaurantPage";
import Error from "./components/Error";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";


// this is a promise
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));


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
                element: <Suspense fallback={<h1>Loading...</h1>}>
                    <About />
                </Suspense>,
                children: [
                    {
                        // path: "/profile", // localhost:1234/profile
                        path: "profile", // parentPath/{path}
                        element: <Profile />,
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
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}>
                    <Instamart />
                </Suspense>,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(<RouterProvider router={appRouter} />);  // HeaderComponent() will also work
