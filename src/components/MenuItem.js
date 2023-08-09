import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

import { IMG_CDN_URL } from "../constants";


const MenuItem = ({ item }, index) => {
    const { id, name, description, price, imageId } = item;

    const dispatch = useDispatch();
    const [itemCount, setItemCount] = useState(0);

    const addFoodItem = (item) => {
        dispatch(addItem(item));
        setItemCount(itemCount + 1);
    }

    const removeFoodItem = (item) => {
        let updatedCount;
        dispatch(removeItem(item));
        updatedCount = itemCount > 0 ? itemCount - 1 : 0;
        setItemCount(updatedCount);
    }

    return (
        <div key={index} className="border-solid my-4 p-2 shadow-lg flex justify-between">
            <div>
                <h3 className="font-bold text-lg w-3/5">{name}</h3>
                <p className="mt-1 text-base font-normal">
                    {price > 0 ? "₹ " + item.price / 100 : " "}{" "}
                </p>
                <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden ">
                    {description}
                </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
                {imageId && (
                    <img
                        className="w-[118px] h-[96px]"
                        src={IMG_CDN_URL + imageId}
                        alt={item?.name}
                    />
                )}
                <div className=" flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray ">
                    <button
                        className="text-xl text-gray-count font-semibold"
                        onClick={() => removeFoodItem(item)}
                    >
                        {" "}
                        -{" "}
                    </button>
                    <span className="text-base text-green"> {itemCount} </span>
                    <button
                        className="text-green text-xl"
                        onClick={() => addFoodItem(item)}
                    >
                        {" "}
                        +{" "}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default MenuItem;