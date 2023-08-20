// import React from 'react'
// const OrderSummaryPage = () =>{
//   return (
//     <>
//       <div>
//         Here you will get order summary and payment gateway
//       </div>  
//     </>
//   )
// }

// export default OrderSummaryPage;


import React from "react";
import useTotalCartValue from "../utils/useTotalCartValue";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ItemQuantity from "./ItemQuantity";


const OrderSummary = () => {
  // const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items)
  const address = useSelector((store) => store.cart.deliveryAddress);
  const getTotal = useTotalCartValue();


  return (
    <div className="text-center col-span-1 w-2/5 mx-8 my-12 border shadow-md items-center">
      <div className="flex justify-center m-5">
        <h1 className="inline-block font-bold text-xl">Order Summary</h1>
      </div>
      {
        <div className="inline-table w-4/5 p-5 my-5 mx-auto items-center border-solid shadow-sm rounded-lg">
          {
            Object.values(cartItems).map((item) => {
              console.log(item);
              {/* return <FoodItemCard key={item.id} {...item} /> */ }
              return (
                <div className="inline-block my-2 w-4/5border-solid shadow-sm">
                  <div className="flex items-center mt-2">
                    <p className="px-1 w-2/5 text-sm">{item.name}</p>
                    <div className="mx-4">
                      <p className="text-green text-sm">{item.quantity}</p>
                    </div>

                    <p className="px-1 font-thin text-sm">
                      {item.price ? "₹ " + (item.price / 100) * item.quantity : "₹ " + 0}
                    </p>
                  </div>
                </div>
              );
            })
          }
        </div>
      }
      <div className=" flex justify-evenly m-5">
        <p className="font-bold text-sm">Total</p>
        <p className="font-bold  text-sm">{"₹ " + getTotal()}</p>
      </div>
      {address && (
        <div>
          <div className="border border-black my-2"></div>
          <div className="flex flex-col justify-between my-2">
            {/* Render delivery address */}
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
          <div className="flex justify-center my-10">
            {/* Link to payment popup */}
            <button className="p-1 m-2 bg-blue-500 text-white rounded-lg">Check Out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;



