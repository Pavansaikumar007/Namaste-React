import logo from "/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;