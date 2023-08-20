import React from "react";
import { useSelector } from "react-redux";
import useTotalCartValue from "../utils/useTotalCartValue";
import OrderSummary from "./OrderSummary"; // Reuse the OrderSummary component

const OrderSummaryPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const address = useSelector((store) => store.cart.deliveryAddress);
  const getTotal = useTotalCartValue();

  return (
    <div className="flex justify-center">
      <OrderSummary />
    </div>
  );
};

export default OrderSummaryPage;
