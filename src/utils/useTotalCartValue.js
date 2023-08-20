import { useSelector } from "react-redux";

import React from "react";

function useTotalCartValue() {
  const cartItems = useSelector((store) => store.cart.items);

  const getTotalCartValue = () => {
    let total =
      cartItems &&
      Object.values(cartItems)
        .map((item) => {
          const itemPrice = item.price || 150; // Use default price of 150 if item price is missing
          return isNaN(itemPrice) ? 0 : (itemPrice / 100) * item.quantity;
        })
        .reduce((acc, curr) => acc + curr, 0);

    return total;
  };

  return getTotalCartValue;
}
export default useTotalCartValue; //