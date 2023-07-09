
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItem = ({ item }, index) => {
    const { id, name, price, imageId } = item;

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div key={index} className="my-4 shadow-lg">
            <div>
                <h3>{name}</h3>
                <h4>
                    {price > 0 ? "₹ " + item.price / 100 : " "}{" "}
                </h4>
            </div>
            <div>
                <button className="p-2 m-5 bg-red-700"
                    onClick={() => addFoodItem(item)}
                >
                    Add
                </button>
            </div>
        </div>
    )
};

export default MenuItem;