// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto w-11/12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-1">
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-gray-300">
                            We are a leading company in providing innovative solutions for your needs.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <p className="text-gray-300">
                            123 Main Street, City
                            <br />
                            Email: karn1689ashish@gmail.com
                            <br />
                            Phone: 0000000000
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
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
