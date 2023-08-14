import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import FoodItemCard from "./FoodCard";
import { clearCart } from "../utils/cartSlice";
import useItemQuantity from "../utils/useItemQuantity";
import MenuItem from "./MenuItem";
import ItemQuantity from "./ItemQuantity";
import { useUserAuth } from "../context/UserAuthContext";
import useTotalCartValue from "../utils/useTotalCartValue";
import Fallback from "./Fallback";
import { useState } from "react";
import { Link } from "react-router-dom";








// test
// import React, { useEffect, useState } from "react";
// import { updateDeliveryAddress } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";
// import { database } from "../context/firebase";
// import { useUserAuth } from "../context/UserAuthContext";
// import { collection, getDocs } from "firebase/firestore";




const Cart = () => {
    const { user } = useUserAuth();
    const cartItems = useSelector(store => store.cart.items);
    // console.log(cartItems);










    // test

    // const { user } = useUserAuth;
    // const dispatch = useDispatch();
    // const [users, setUsers] = useState({});
    // const databaseRef = collection(database, "users");


    // useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDocs(databaseRef);
    //         // console.log(data);
    //         setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     }

    //     getUsers();
    //     console.log(users);
    // }, []);

    // const currentUser = null; 
    // // users.find(obj => obj.email === user.email);
    // for (const key in users) {
    //     if (users[key].email === user.email) {
    //         currentUser = users[key];
    //         break;
    //     }
    // }
    // // const currentUserAddress = JSON.stringify(currentUser.address);
    // const currentAddress = currentUser && currentUser.address;
    // // const address = currentAddress
    // console.log(currentAddress);












    const dispatch = useDispatch();
    const address = useSelector((store) => store.cart.deliveryAddress);
    const getTotal = useTotalCartValue();

    const totalItems = useItemQuantity();
    const totalItemsCount = useSelector(store => store.cart.totalItemsCount);



    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return totalItemsCount > 0 ? (
        <div>
            <div className="flex justify-between ">
                <div className="col-span-1 mx-8 w-2/5 my-10">
                    <Fallback />
                </div>


                <div className="text-center col-span-1 w-2/5 mx-8 my-12 border shadow-md items-center">
                    <div className="flex justify-center m-5">
                        <h1 className="inline-block font-bold text-xl">
                            Cart Items
                        </h1>
                    </div>
                    {
                        <div className="inline-table w-4/5 p-5 my-5 mx-auto items-center border-solid shadow-lg rounded-lg">
                            {
                                Object.values(cartItems).map((item) => {
                                    console.log(item);
                                    {/* return <FoodItemCard key={item.id} {...item} /> */ }
                                    return (
                                        <div className="inline-block my-2 w-4/5border-solid shadow-lg">
                                            <div className="flex items-center mt-2">
                                                <p className="px-1 w-2/5 text-sm">{item.name}</p>
                                                <div className="px-1">
                                                    <ItemQuantity item={item} key={item.id} />
                                                </div>

                                                <p className="px-1 font-thin text-sm">
                                                    {"₹ " + (item.price / 100) * item.quantity}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    }



                    <div className=" flex justify-evenly m-5">
                        <p className="font-bold text-sm">To Pay</p>
                        <p className="font-bold  text-sm">{"₹ " + getTotal()}</p>
                    </div>
                    {user && ((address)) && (
                        <div>
                            <div className="border border-black my-2"></div>
                            {(address) && (
                                <div className="flex flex-col justify-between my-2">
                                    <h1 className="text-lg mt-2.5 text-title font-bold ">
                                        Delivery Address
                                    </h1>
                                    <h2 className="font-semibold mt-2.5 text-title text-base">
                                        {address.addressType}
                                    </h2>
                                    <p className="text-sm text-bio text-ellipsis">
                                        {address.addressDescription}
                                    </p>
                                </div>
                            )}

                            <div className="flex justify-center my-10">
                                <Link to="/ordersummary">
                                    <button className="bg-blue-400 rounded-lg text-white px-3 py-1 mt-1 text-sm hover:drop-shadow-lg">
                                        {" "}
                                        PROCEED TO PAYMENT
                                    </button>
                                </Link>
                            </div>

                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center m-5">
                <button
                    className="w-[80px] h-[22px] rounded-md bg-red-500 text-white text-sm"
                    onClick={() => handleClearCart()}
                >
                    Clear Cart
                </button>
            </div>
        </div>
    ) : (
        <div>
            <h1>No Items Added in Cart</h1>
        </div>
    )
        ;
};

export default Cart;


{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {cartItems.map((item) => (
        <div key={item.id}>
            <img src={IMG_CDN_URL + item.imageId} alt={item.name} />
            <h1 className="font-bold text-xl">{item.name}</h1>
            <p></p>
            <h2 className="font-bold text-xl">{item.price / 100}</h2>
        </div>
    ))}
</div> */}


// {!isEmptyObject(payment) && (
//     <div className="flex flex-col justify-between mb-2">
//         <h1 className="text-lg mt-2.5 text-title font-bold ">
//             Payment
//         </h1>
//         <h2 className="font-semibold mt-2.5 text-title text-base">
//             {payment.paymentType}
//         </h2>
//         <p className="text-sm text-bio text-ellipsis">
//             {payment?.paymentMethod}
//         </p>
//     </div>
// )}
// <div className="flex justify-center my-10">
//     <Link to="/payment">
//         <button className="bg-yellow px-4 py-2 text-blue-dark hover:drop-shadow-lg backdrop-blur">
//             {" "}
//             PROCEED TO PAYMENT
//         </button>
//     </Link>
// </div>