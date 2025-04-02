import { CDN_URL } from "../utils/constants";



const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, cloudinaryImageId, areaName, cuisines, sla, avgRating } = resData?.info;

    return (

        <div className="max-w-[275px] max-height-[285px] mt-[10px] mb-[20px] mr-[20px] hover:scale-[0.91] transition-transform duration-300 ">
            <div className="  " >
                {<img src={CDN_URL + cloudinaryImageId} alt="res-image" className="min-w-[272px] max-width-[273px] h-[182px] object-cover rounded-[20px]" />}
            </div>
            <div className="card-items">
                <h3 className=" font-bold">{name}</h3>
                <h4><i></i>{avgRating} • {sla.slaString} </h4>
                <p>{cuisines.join(", ")}</p>
                <p>{areaName}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;