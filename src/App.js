import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "/src/components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import  RestaurantInfo  from "/src/components/RestaurantInfo";



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
            <Outlet />
        </div>
    )

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/", element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact", element: <Contact />,
            },
            {
                path:"/restaurants/:resId", element: <RestaurantInfo />
            }
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)  