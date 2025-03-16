import logo from "/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

// let btnName = "Login"



const Header = () => {

    // we should give our local state variable hook inside function
    const [dynamicBtn, setdynamicBtn] = useState("Login");
    // console.log("header rendered");
    

    return (
        <div className="header-container">
            <div>
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="header-items">
                <ul className="list-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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