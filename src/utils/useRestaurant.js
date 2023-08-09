import { useState, useEffect } from "react";
import { FETCH_INFO_MENU_URL } from "../constants";


const useRestaurant = (id) => {
    
    const [restaurant, setRestaurant] = useState(null);
    // const [restaurantInfo, setRestaurantInfo] = useState({});
    // const [restaurantMenu, setRestaurantMenu] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const response = await fetch(FETCH_INFO_MENU_URL + id);
        const res_data = await response.json();
        // console.log(res_data);
        const menuItemList = res_data?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const nestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

        // console.log(menuItemList);

        const menu = menuItemList?.map(item => {
            if ((item?.card?.card["@type"] === itemCategory) || (item?.card?.card["@type"] === nestedItemCategory)) {
                return item.card.card;
            }
        })



        const restaurantInfo = res_data?.data?.cards[0]?.card?.card?.info;
        const restaurantMenu = menu?.filter(value => value !== undefined);

        const data = Object.assign({restaurantInfo},{restaurantMenu});
        setRestaurant(data);

        console.log(restaurant);
        // console.log(restaurantInfo);
        // console.log(restaurantMenu);
    }
};

export default useRestaurant;