// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";


//
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";



const Body = () => {
    // const searchTxt="KFC"; // js way to create variable

    // searchText is a local state variable
    const [searchText, setsearchText] = useState(); // returns => [variable name, function to update the variable]
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        // API call
        getRestaurant();
        // Do error handling
    }, []);

    function findRestaurantListByPropertyId(dataArray) {
        return dataArray?.find(obj => obj?.card?.card?.hasOwnProperty("id") && obj?.card?.card?.id === "restaurant_grid_listing")
    }

    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8041502&lng=83.34821459999999&page_type=DESKTOP_WEB_LISTING").then(() => {
            console.log("Data fetched");
        })
            .catch(err => console.log(err));;

        // new api
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1619602&lng=72.7850744&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
        //     method: "GET",
        // }).then(() => {
        //     console.log("Data fetched");
        // })
        //     .catch(err => console.log(err));
        if (!data) {
            console.log("Data not fetched");
        }
        const json = await data?.json();
        console.log(json);
        // optional chaining
        // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);


        // new API
        const dataArray = json?.data?.cards;

        // const restaurantListData = ()=>{
        //     return dataArray?.find(obj => obj?.card?.card?.hasOwnProperty(id) && obj?.card?.card?.id==="restaurant_grid_listing")
        // }

        const restaurantListData = findRestaurantListByPropertyId(dataArray)

        console.log(restaurantListData);
        // setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setAllRestaurants(restaurantListData?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(restaurantListData?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // console.log(allRestaurants);
    }

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>🔴 Offline, please check your internet connection!!!</h1>;
    }

    // console.log(allRestaurants);

    // conditional rendering
    // if restaurant is empty => Shimer UI
    // if restaurant has data => actual data UI

    // not render component (Early return)
    if (!allRestaurants) return null;

    return (allRestaurants?.length === 0) ? <Shimmer /> : (

        <>
            <div className="search-container flex justify-center w-3/5 p-5 bg-pink-50 my-5 mx-auto items-center rounded-lg">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        // e.target.value -> whatever you write in input
                        setsearchText(e.target.value);
                    }}
                />
                <button
                    className="p-2 m-2 bg-black text-white rounded-full"
                    onClick={() => {
                        // need to filter the data
                        const data = filterData(searchText, allRestaurants);
                        // update the state - restaurants
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>

                {/* <input value={user.name} onChange={
                    e => setUser({
                        ...user,
                        name: e.target.value,
                    })
                }></input>
                <input value={user.email} onChange={
                    e => setUser({
                        ...user,
                        email: e.target.value,
                    })
                }></input> */}

            </div>
            <div className="restaurant-list flex flex-wrap justify-center justify-between w-4/5 p-5 bg-pink-50 my-5 mx-auto items-center rounded-lg">
                {/* if search query is not found/ found */}
                {
                    (filteredRestaurants?.length === 0) ? <h1>No Restaurant match your Filter</h1> :
                        filteredRestaurants?.map((restaurant) => {
                            return (
                                <Link
                                    to={"/restaurant/" + restaurant.info.id}
                                    key={restaurant.info.id}
                                >
                                    <RestaurantCard {...restaurant.info} />
                                </Link>
                            )
                        })
                }
            </div>
        </>
    );
}

export default Body;