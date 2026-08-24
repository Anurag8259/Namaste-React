import React,{lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider , Outlet} from "react-router";
import RestaurantCard from "./components/RestaurantCard";

// Header
//     - Logo
//     - Nav Items
// Body
//    - Search
//    - Restaurant Container
//          -Restaurant Card
// Footer
//    - Copyright
//    - Links
//    - Address
//    - Contact




// Chunking
// Code Splitting
// Lazy Loading
// Dynamic Bundling
// On Demand Loading
// Dynamic import
// All refer to the same concept of loading the code when required. This helps in reducing the size of the bundle and improves the performance of the application.
const Grocery = lazy(() => import("./components/Grocery"));



const AppLayout = () => {
    return (
        <div className = "app">
            {/* Header */}
            <Header/>
            {/* Body */}
            {/* <Body/> */}
            {/* Footer */}
            {/* Outlet - renders components that is specified in the children array */}
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurants/:storeId/:brandId",
                element: <RestaurantMenu/>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback ={<h1>Loading...</h1>}><Grocery/></Suspense>,
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);