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

    const onlineStatus = useOnlineStatus ();


    return (
        <div className="header-container">
            <div>
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="header-items">
                <ul className="list-items">
                    <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/grocery">Instamart</Link></li>
                    <li><FaShoppingCart className="cart-icon" /></li>
                    <button className="login" onClick={() => {

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