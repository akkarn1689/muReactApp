import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

import MenuItem from "./MenuItem";

const RestaurantItemCategory = ({ itemList }, index) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
    // console.log(itemList);

    return (
        <div key={index} className="p-4  bg-white">
            <div className="flex justify-between items-center" onClick={toggleVisibility}>
                <h1 className="text-xl font-semibold" onClick={toggleVisibility}>
                    {itemList?.title}
                </h1>
                {isVisible ? (
                    <SlArrowUp onClick={toggleVisibility} className="cursor-pointer" />
                ) : (
                    <SlArrowDown onClick={toggleVisibility} className="cursor-pointer" />)
                }
            </div>
            {isVisible && (
                <div className="flex flex-col justify-evenly">
                    {itemList?.itemCards?.map((itemCard) => (
                        <MenuItem key={itemCard?.id} item={itemCard?.card?.info} />
                    ))}
                </div>
            )}
            
        </div>
    )
}



export default RestaurantItemCategory;