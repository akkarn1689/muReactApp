import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantNestedItemCategory = ({ nestedList }) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleView = () => {
        setIsVisible(!isVisible);
    }


    return (
        <div className="p-4  bg-white">
            <div className="flex justify-between items-center" onClick={toggleView}>
                <h1 className="text-xl font-semibold" onClick={toggleView}>
                    {nestedList?.title}
                </h1>
                {isVisible ? (
                    <SlArrowUp onClick={toggleView} className="cursor-pointer" />
                ) : (
                    <SlArrowDown onClick={toggleView} className="cursor-pointer" />)
                }
            </div>
            {isVisible && (
                <div>
                    {nestedList?.categories.map((category, index) => (
                        <div key={index}>
                            <RestaurantItemCategory itemList={category} />
                        </div>
                    ))
                    }
                </div>
            )

            }

        </div>
    );
}

export default RestaurantNestedItemCategory;


// {nestedList?.categories.map((category, index) => (
//     <div key={index}>
//         <RestaurantItemCategory itemList={category} />
//     </div>
// ))
// }