import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import RestaurantInfoComponent from "./RestaurantInfo";
import RestaurantItemCategory from "./RestaurantItemCategory";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";
import Shimmer from "./Shimmer";

import { IMG_CDN_URL, FETCH_INFO_MENU_URL } from "../constants";

// import useRestaurant from "../utils/useRestaurant";

const RestaurantPage = () => {
    const params = useParams();
    // console.log(params);
    const { id } = params;


    const [restaurant, setRestaurant] = useState(null);
    const [restaurantInfo, setRestaurantInfo] = useState({});
    const [restaurantMenu, setRestaurantMenu] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const response = await fetch(FETCH_INFO_MENU_URL + id);
        const res_data = await response.json();
        const menuItemList = res_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const nestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

        // console.log(menuItemList);

        const menu = menuItemList?.map(item => {
            if ((item?.card?.card["@type"] === itemCategory) || (item?.card?.card["@type"] === nestedItemCategory)) {
                return item.card.card;
            }
        })



        setRestaurantInfo(res_data?.data?.cards[0]?.card?.card?.info);
        setRestaurantMenu(menu?.filter(value => value !== undefined));

        setRestaurant([ restaurantInfo, restaurantMenu ]);

        console.log(restaurant);
        // console.log(restaurantInfo);
        // console.log(restaurantMenu);
    }



    return (!restaurant) ? (
        <Shimmer />
    ) : (
        <div className="restaurant">
            <div className="restaurant-info">
                <RestaurantInfoComponent {...restaurantInfo} />
            </div>
            <div className="restaurant-menu">
                <h1>Menu</h1>
                {
                    (restaurantMenu?.length === 0) ? <h1>No item on menu</h1> :
                    restaurantMenu?.map((item,index)=>{
                        return (
                            <div key={index}>
                                {console.log(item)}
                                
                                {item.categories ? (
                                    <RestaurantNestedItemCategory nestedList={item}/>
                                ):(
                                    <RestaurantItemCategory itemList={item}/>
                                )}

                            </div>
                        )
                    })                    
                }
            </div>
        </div>
    );
};

export default RestaurantPage;