// Imports from constants.js
import { IMG_CDN_URL } from "../constants";


// Restaurant Card
export const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
    return (
        <div className="card w-64 p-3 m-3 h-80 shadow-lg bg-pink-50 rounded-lg">
            <img
                src={
                    IMG_CDN_URL + cloudinaryImageId
                }
                alt={name}
            />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    );
}

export default RestaurantCard;