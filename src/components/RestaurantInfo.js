import React from 'react';
import { IMG_CDN_URL } from '../constants';

const RestaurantInfoComponent = (restaurant) => {
    return (
        <div className="flex justify-between justify-center w-3/5 bg-black my-5 mx-auto items-center rounded-lg">
            <div className="w-2/5">
                <img
                    className="restaurant-image m-2 w-3/5 rounded-lg"
                    src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                    alt={restaurant?.name}
                />
                <figcaption><p className="p-2 m-2 font-bold text-white">
                    {restaurant?.cuisines.join(", ")}
                </p></figcaption>
            </div>
            <div className="flex flex-col items-center justify-between py-6 px-10">
                <div className="">
                    <h2 className="px-2 font-bold text-4xl text-white">
                        {restaurant?.name}
                    </h2>
                </div>
                {/* <p className="py-10">
                    {restaurant?.cuisines.join(", ")}
                </p> */}

                <div className="inline-block align-top text-2xl m-8">
                    <span className='text-white'>{restaurant?.avgRating} ⭐</span>
                </div>

                {/* <div className="">
                    <div className="">
                        <span>{restaurant?.avgRating} ⭐</span>
                    </div>
                    <div>|</div>
                    <div>{restaurant?.sla.slaString}</div>
                    <div>|</div>
                    <div>{restaurant?.costForTwoMessage}</div>
                </div> */}
            </div>
        </div>
    )
};


export default RestaurantInfoComponent;