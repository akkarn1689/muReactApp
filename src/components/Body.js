import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// what is state?
// what is React Hooks? - function
// what is useState?

function filterData(searchInput){
    const filterData = restaurantList.filter((restaurant)=> 
        restaurant.data.data.name.includes(searchInput)
    );

    return filterData;
}


const Body = () => {
    // const searchTxt="KFC"; // js way to create variable

    // searchText is a local state variable
    const [searchInput, setSearchInput] = useState(); // returns => [variable name, function to update the variable]
    const [restaurants, setRestaurants] = useState(restaurantList);
    
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => {
                        // e.target.value -> whatever you write in input
                        setSearchInput(e.target.value);
                    }}
                />
                <button 
                    className="search-btn"
                    onClick={ ()=>{
                        // need to filter the data
                        const data = filterData(searchInput);
                        // update the state - restaurants
                        setRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map(restaurant => {
                        return <RestaurantCard {...restaurant.data.data} key={restaurant.data.data.id} />
                    })
                }
            </div>
        </>
    );
}

export default Body;