import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "/src/components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import RestaurantInfo from "/src/components/RestaurantInfo";


const Grocery = lazy(() => import("./components/Grocery.js"))

const About = lazy(() => import("./components/About.js"))

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