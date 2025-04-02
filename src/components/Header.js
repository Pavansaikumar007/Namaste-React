import logo from "/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

// let btnName = "Login"



const Header = () => {

    // we should give our local state variable hook inside function
    const [dynamicBtn, setdynamicBtn] = useState("Login");
    // console.log("header rendered");

    const onlineStatus = useOnlineStatus();


    return (
        <div className=" flex justify-between p-4 items-center sticky top-0 z-10 bg-white shadow-md">
            <div className=" w-[80px] ">
                <img src={logo} alt="logoImage" className=" rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>
            <div className="">
                <ul className=" flex gap-6  text-[17px] font-[600]  cursor-pointer">
                    <li className=" hover:text-[#FF5200]" >Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li className=" hover:text-[#FF5200]">
                        <Link to="/">Home</Link>
                    </li>
                    <li className=" hover:text-[#FF5200]"><Link to="/about">About us</Link></li>
                    <li className=" hover:text-[#FF5200]"><Link to="/contact">Contact us</Link></li>
                    <li className=" hover:text-[#FF5200]"><Link to="/grocery">Instamart</Link></li>
                    <li className=" mt-1.5"><FaShoppingCart className="cart-icon" /></li>
                    <button className=" hover:text-[#FF5200] " 
                    onClick={() => {

                        dynamicBtn === "Login" ? setdynamicBtn("LogOut") : setdynamicBtn("Login")
                    }}>
                        {dynamicBtn}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;