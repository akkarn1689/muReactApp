import { useSelector } from "react-redux";

import React from "react";

function useItemQuantity() {
  const cartItems = useSelector((store) => store.cart.items);

  const getItemQuantity = () => {
    let total =
      cartItems &&
      Object.values(cartItems)
        .map((item) => (item.price / 100) * item.quantity)
        .reduce((acc, curr) => acc + curr, 0);

    return total;
  };

  return getItemQuantity;
}
export default useItemQuantity;
