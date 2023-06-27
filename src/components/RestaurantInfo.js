import React from 'react';
import { IMG_CDN_URL } from '../constants';

const RestaurantInfoComponent = (restaurant) => {
    return (
        <div>
            <img
                className="restaurant-image"
                src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                alt={restaurant?.name}
            />
            <div className=" ">
                <h2 className="">
                    {restaurant?.name}
                </h2>
                <p className="">
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