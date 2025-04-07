import { useState } from "react";
import RestaurantItemCards from "./RestaurantItemCards";

const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
    const handleClick = () => {
        setshowIndex()
    };

    return (
        <div>
            {/* header */}
            <div className="  my-2 py-2 ">
                <div className="flex justify-between cursor-pointer shadow-lg  py-6" onClick={handleClick}>
                    <span className=" font-bold  text-[20px] ">
                        {data.title} ({data.itemCards.length})</span>
                    <span> 🔼 </span>
                </div>
                {/* accordion body */}
               {showItems && <RestaurantItemCards  items={data.itemCards} />}

            </div>
        </div>
    )
}

export default RestaurantCategory;