import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import FoodItemCard from "./FoodCard";
import { clearCart } from "../utils/cartSlice";
import useItemQuantity from "../utils/useItemQuantity";
import MenuItem from "./MenuItem";
import ItemQuantity from "./ItemQuantity";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const totalItems = useItemQuantity();
    const totalItemsCount = useSelector(store => store.cart.totalItemsCount);



    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <div className="flex justify-center m-5">
                <h1 className="font-bold text-3xl">
                    Cart Items
                </h1>
            </div>
            {
                totalItemsCount == 0 ? <h1>No Items Selected</h1> : <div className="restaurant-list flex flex-wrap justify-center justify-between w-4/5 p-5 bg-pink-50 my-5 mx-auto items-center rounded-lg">
                    {
                        Object.values(cartItems).map((item) => {
                            console.log(item);
                            {/* return <FoodItemCard key={item.id} {...item} /> */ }
                            return (
                                <div className="my-3">
                                    <div className="flex items-center mt-2">
                                        <p className="px-2 w-48 text-sm">{item.name}</p>
                                        <div className="px-5">
                                            <ItemQuantity item={item} key={item.id} />
                                        </div>

                                        <p className="font-thin text-sm">
                                            {"₹ " + (item.price / 100) * item.quantity}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            }

            <div className="flex justify-center m-5">
                <button
                    className="w-[80px] h-[22px] rounded-md bg-red-500 text-white text-sm"
                    onClick={() => handleClearCart()}
                >
                    Clear Cart
                </button>
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