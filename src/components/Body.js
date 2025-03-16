import RestaurantCard from "./RestaurantCard";

import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () => {

    //local State Variable - super powerful variable
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurantsData, setfilteredRestaurantsData] = useState([]);

    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.773521&lng=83.242101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )

        const json = await data.json();
       console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setlistOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setfilteredRestaurantsData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    };

    // //Conditional Rendering 
    // if (listOfRestaurants.length  === 0) {
    //     return <Shimmer/>
    // }

    // using ternary operator
    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div>
            <div className="input-search">
                <input type="text" placeholder="Search" 
                className="search-box" value={searchText}
                onChange={(e) => {
                    setsearchText(e.target.value)
                }}
                />
                <CiSearch className="search-icon" 
                onClick={() => {

                    const filteredRestaurants = listOfRestaurants.filter((res) => 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                    setfilteredRestaurantsData(filteredRestaurants)
                    console.log(filteredRestaurants)
                }}
                />
            </div>
            <div>
                <button
                    className="topres-btn"
                    onClick={() => {
                        const filteredData = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        )
                        setfilteredRestaurantsData(filteredData);
                    }}
                >
                    4.3 - 5.0
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurantsData.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;