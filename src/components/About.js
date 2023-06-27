import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <>
            <div>
                <h1>About Us Page</h1>
                <p>
                    {" "}
                    Learning React-routing...
                </p>
            </div>
            < Outlet />
        </>
    );
};

export default About;
