import { useEffect, useState } from "react";
import { RESTAURANTS_URL } from "/src/utils/constants";

export const useRestaurantMenu = (resId) => {

    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(RESTAURANTS_URL + resId);
        const json = await data.json();

        //console.log(json?.data?.cards[2].card?.card?.info?.name);
        setresInfo(json.data)
    }

    return resInfo;
};

