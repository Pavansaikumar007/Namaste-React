import RestaurantCard from "./RestaurantCard";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurantsData, setFilteredRestaurantsData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_URL);
        const json = await data.json();
        // const restaurants = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        //console.log(restaurants)
        
        setListOfRestaurants(restaurants);
        setFilteredRestaurantsData(restaurants);
    };

    // Function to filter dynamically as user types
    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchText(query);
        
        const filtered = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(query)
        );
        setFilteredRestaurantsData(filtered);
    };

    // Function to filter when Enter is pressed
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
            );
            setFilteredRestaurantsData(filtered);
        }
    };

    const onlineStatus = useOnlineStatus();


    if(onlineStatus === false) {
        return <h1>you're offline. Please check your internet</h1>
    }

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div>
            <div className="input-search">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-box"
                    value={searchText}
                    onChange={handleSearchChange}
                    onKeyPress={handleKeyPress} // Enter key filtering
                />
                <CiSearch className="search-icon" onClick={() => handleKeyPress({ key: "Enter" })} />
            </div>
            <div className="topres-btn">
                <button
                    onClick={() => {
                        const filteredData = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setFilteredRestaurantsData(filteredData);
                    }}
                >
                    4.3 - 5.0
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurantsData.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
