import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import FoodItemCard from "./FoodCard";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    return (
        <div>
            <div className="diplay-flex justify-center m-5">
                <h1 className="font-bold text-3xl">
                    {" "}
                    Cart Items - {cartItems.length}
                </h1>
            </div>
            <div className="restaurant-list flex flex-wrap justify-center justify-between w-4/5 p-5 bg-gray-300 my-5 mx-auto items-center rounded-lg">
                {
                    cartItems.map((item) => {
                        return <FoodItemCard key={item.id} {...item} />
                    })
                }
            </div>

        </div>
    );
};

export default Cart;


{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {cartItems.map((item) => (
        <div key={item.id}>
            <img src={IMG_CDN_URL + item.imageId} alt={item.name} />
            <h1 className="font-bold text-xl">{item.name}</h1>
            <p></p>
            <h2 className="font-bold text-xl">{item.price / 100}</h2>
        </div>
    ))}
</div> */}