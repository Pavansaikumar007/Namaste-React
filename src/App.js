import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Restaurant, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



const AppLayout = () => {
    return (
        <div className="app-container">
            <Header />
            <Body />
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)