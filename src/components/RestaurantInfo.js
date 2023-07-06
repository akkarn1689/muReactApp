import React from 'react';
import { IMG_CDN_URL } from '../constants';

const RestaurantInfoComponent = (restaurant) => {
    return (
        <div className="flex py-8 mx-24">
            <img
                className="restaurant-image w-3/12 py-8 mx-24"
                src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                alt={restaurant?.name}
            />
            <div className="flex justify-between py-10">
                <h2 className="px-2 font-bold text-3xl">
                    {restaurant?.name}
                </h2>
                <p className="py-10">
                    {restaurant?.cuisines.join(", ")}
                </p>
                <div className="">
                    <div className="">
                        <span>{restaurant?.avgRating} star</span>
                    </div>
                    <div>|</div>
                    <div>{restaurant?.sla.slaString}</div>
                    <div>|</div>
                    <div>{restaurant?.costForTwoMessage}</div>
                </div>
            </div>
        </div>
    )
};


export default RestaurantInfoComponent;