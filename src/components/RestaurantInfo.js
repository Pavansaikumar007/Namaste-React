import { useEffect, useState } from "react";
import { RESTAURANTS_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "/src/utils/useRestaurantMenu";



const RestaurantInfo = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return (<Shimmer />);

    // const { name, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    const { name, avgRating, costForTwoMessage, cuisines, sla } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories;

    // const resCardData = (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name)
    // console.log(resCardData)

    return (
        <div>
            <h1>{name}</h1>
            <h3>{avgRating} {costForTwoMessage}</h3>
            <p>{cuisines.join(',')}</p>
            <p>{sla.slaString}</p>

            <div>
                <img />
                <button>ADD</button>
            </div>

            <div>
                <h2>Recommended</h2>
                <ul>
                    {itemCards.map((items) => (
                        <li key={items.card?.info?.id}>{items.card?.info?.name} - {"Rs."}
                            {items.card?.info?.price / 100}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default RestaurantInfo;