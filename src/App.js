import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "/src/components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import RestaurantInfo from "/src/components/RestaurantInfo";
import userContext from "./utils/userContext.js";


const Grocery = lazy(() => import("./components/Grocery.js"))

const About = lazy(() => import("./components/About.js"))


const AppLayout = () => {

    const [userName, setuserName] = useState();

    //authentication
    useEffect(() => {
        const data = {
            name : "Pavan Sai  "
        };
        setuserName(data.name)
    },[])


    return (
        <userContext.Provider value={{loggedInUser : userName}}>
        <div className="app-container">
            <Header />
            <Outlet />
        </div>
        </userContext.Provider> 
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
                element: <Suspense fallback={<h1>Loading... About</h1>}>
                    <About />
                </Suspense> ,
            },
            {
                path: "/contact", element: <Contact />,
            },
            {
                path: "/restaurants/:resId", element: <RestaurantInfo />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}>
                    <Grocery />
                </Suspense>
            }
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)  