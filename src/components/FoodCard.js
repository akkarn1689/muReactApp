// Imports from constants.js
import { IMG_CDN_URL } from "../constants";


// Restaurant Card
export const FoodItemCard = ({ name, description, price, imageId }) => {
    return (
        <div className="card flex flex-wrap card w-64 p-3 m-3 shadow-lg bg-pink-50 rounded-3xl">
            <img
                src={
                    IMG_CDN_URL + imageId
                }
                alt={name}
            />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3 className="text-gray-400 text-xs">{description}</h3>
            <h4>₹ {price/100}</h4>
        </div>
    );
}

export default FoodItemCard;