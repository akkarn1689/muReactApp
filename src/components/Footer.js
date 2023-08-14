// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="pt-1 bg-gray-900 text-white py-1">
            <div className="col-span-1 text-center">
                <h3 className="text-xl font-semibold mb-1">Social Media</h3>
                <ul className="flex justify-center">
                <li><a href="https://www.linkedin.com/in/karnashish16/" className="text-gray-300 hover:text-white mx-2">LinkedIn</a></li>
                    <li><a href="https://github.com/akkarn1689" className="text-gray-300 hover:text-white mx-2">GitHub</a></li>
                    <li><a href="mailto: akkarn1689@gmail.com" className="text-gray-300 hover:text-white mx-2">Mail your Review</a></li>
                    
                </ul>
            </div>
            <div className="mt-1 pt-1 text-center">
                <p>&copy; 2023 Developed by: Ashish Kumar Karn</p>
            </div>

        </footer>
    );
};

export default Footer;





// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

// // Footer Component

// const Footer = () => {
//     const { user } = useContext(UserContext);
//     return (
//         <div>
//             <h4 className="p-10 m-10">
//                 This site is developed by:
//                 <span className="font-bold"> {user.name} </span>
//                 - {user.email}
//             </h4>
//         </div>
//     );
// }

// export default Footer;
