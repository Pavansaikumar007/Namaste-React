import { CDN_URL } from "../utils/constants";



const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(props)

    const { name, cloudinaryImageId, areaName, cuisines, sla, avgRating } = resData?.info;

    return (

        <div className="body-component">
            <div className="body-image">
                {<img src={CDN_URL + cloudinaryImageId} alt="res-image" className="res-image" />}
            </div>
            <div className="card-items">
                <h3>{name}</h3>
                <h4><i class="fa-regular fa-star"></i>{avgRating} • {sla.slaString} </h4>
                <p>{cuisines.join(", ")}</p>
                <p>{areaName}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;