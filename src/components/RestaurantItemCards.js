import { CDN_URL } from "../utils/constants"

const RestaurantItemCards = ({ items }) => {
    //console.log("ITEMS", items)
    return (
        <div>
            {items.map((dishes) => (
                <div key={dishes?.card?.info?.id} className="flex  justify-between h-[203px] my-4 border-b-2">
                    <div className=" my-2 py-2 flex flex-col  w-9/12 ">
                        <span className=" font-bold text-[#414449] text-lg  ">{dishes?.card?.info?.name}</span>
                        <span className=" font-bold">₹{dishes?.card?.info?.price / 100}</span>
                        <span className=" text-[#676A6D] text-[16px] font-medium ">{dishes?.card?.info?.description}</span>
                    </div>
                    <div className="w-[156px]  relative">
                        <img className=" object-cover cursor-pointer h-[144px] rounded-lg" src={CDN_URL + dishes?.card?.info?.imageId} />

                        <button className=" absolute bottom-10 bg-white w-[120px] ml-4 h-[39px] shadow-lg rounded-lg font-bold text-[#1BA672] border-1 border-gray-200 cursor-pointer hover:bg-[#D9DADB] ">
                            ADD</button>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default RestaurantItemCards