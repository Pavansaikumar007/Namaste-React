import RestaurantCard from "./RestaurantCard";
import RestaurantList from "../utils/mockData";
import { CiSearch } from "react-icons/ci";
import {useState} from "react";



const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState(RestaurantList);

    return (
        <div>
            <div className="input-search">
                <input type="text" placeholder="Search" />
                <CiSearch className="search-icon" />
            </div>
            <div>
                <button
                    className="topres-btn"
                    onClick={() => {
                        const filteredData = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        )
                        setlistOfRestaurants(filteredData);
                    }}
                >
                    4.3 - 5.0
                </button>
            </div>
            <div className="res-container"> 
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;