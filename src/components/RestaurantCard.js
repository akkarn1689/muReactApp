import { AiFillStar } from "react-icons/ai";

// Imports from constants.js
import { IMG_CDN_URL } from "../constants";


// Restaurant Card
export const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId, slaString, costForTwoString }) => {
    const buttonStyle = {
        backgroundColor: avgRating == "--" ? "#fff" : parseFloat(avgRating) < 4.0 ? "#db7c38" : "#48c479",
        color: isNaN(avgRating) ? "#535665" : "#fff"
    }

    return (
        <div className="transition ease-in-out delay-100 card w-64 p-3 m-3 h-[19rem] hover:scale-105 shadow-lg bg-pink-50 rounded-3xl">
            <div className="relative w-full rounded-3xl">
                <img
                    className="w-full mob:w-[130px]"
                    src={
                        IMG_CDN_URL + cloudinaryImageId
                    }
                    alt={name}
                />
            </div>
            <div className="">
                <h6 className="text-base font-bold w-4/5 tracking-normal">{name}</h6>
                <p className="text-gray-dark text-xs w-4/5 overflow-hidden h-[32px]">{cuisines.join(", ")}</p>
                <div className="flex mt-4 justify-between items-center text-xs pb-2.5 text-gray-details font-semibold">
                    <div className="flex items-center h-5 w-11 gap-1 py-0 px-1" style={buttonStyle}>
                        <AiFillStar /><span>{avgRating}</span>
                    </div>
                    <div>•</div>
                    <div>{slaString}</div>
                    <div>•</div>
                    <div>{costForTwoString}</div>
                </div>
            </div>
            {/* <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{avgRating} stars</h4> */}
        </div>
    );
}

export default RestaurantCard;