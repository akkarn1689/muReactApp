import React from 'react';
import { IMG_CDN_URL } from '../constants';
import { AiFillStar } from 'react-icons/ai';

const restaurantInfoComponent = (restaurantInfo) => {
    return (
        <div className="flex basis-full justify-evenly h-60 bg-blue-950 my-5 mx-auto items-center rounded-lg p-8 text-gray">

            <img
                className="restaurantInfo-image w-[240px] h-[155px] mob:w-[130px] mob:[81px] rounded-lg"
                src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId}
                alt={restaurantInfo?.name}
            />
            <div className="flex flex-col justify-between m-5 py-6 px-2">

                <h2 className="px-2 font-semibold text-3xl text-white">
                    {restaurantInfo?.name}
                </h2>

                <p className="overflow-hidden px-2 text-white whitespace-nowrap text-[15px]">
                    {restaurantInfo?.cuisines?.join(", ")}
                </p>

                <div className="flex mt-5 px-2 justify-between items-center text-sm text-white font-semibold pb-2 max-w-[342px] mob:text-xs mob:font-normal">
                    <div className="flex items-center px-1 py-0 gap-1">
                        <AiFillStar />
                        <span>{restaurantInfo?.avgRating}</span>
                    </div>
                    <div>|</div>
                    <div>{restaurantInfo?.sla?.slaString}</div>
                    <div>|</div>
                    <div>{restaurantInfo?.costForTwoMsg}</div>
                </div>
            </div>
        </div>
    )
};


export default restaurantInfoComponent;