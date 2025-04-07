import { useEffect, useState } from "react";
import { RESTAURANTS_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "/src/utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
//import { FaRegStar } from "react-icons/fa";



const RestaurantInfo = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    //lifting the state up
    const[showIndex, setshowIndex] = useState(null);

    if (resInfo === null) return (<Shimmer />);

    // const { name, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    const { name, avgRating, costForTwoMessage, cuisines, sla } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories;

    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    console.log(categories)

    // const resCardData = (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name)
    // console.log(resCardData)

    return (
        <div className=" text-left  w-8/12 m-auto">
            <h1 className=" font-[700]  text-[28px] py-2 " >{name}</h1>
            <h3 className=" font-bold text-[18px] py-0.5">{avgRating} {costForTwoMessage}</h3>
            <p className=" underline decoration-[#FF5200] text-[#FF5200] font-bold py-0.5">{cuisines.join(', ')}</p>
            <p className=" font-bold py-0.5">{sla.slaString}</p>

            {/* Catergories accordion */}
            <div>
                {categories.map((category, index) => (
                    //Controlled Component
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                        showItems={ index === showIndex ? true : false}
                        setshowIndex={() => setshowIndex(index)}
                        />
                ))}
            </div>

        </div>
    )
}

export default RestaurantInfo;