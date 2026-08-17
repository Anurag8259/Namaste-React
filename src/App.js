import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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



const Style = {
    backgroundColor : "#f8f7eb"
}
// props - ia an object which is used to pass data from parent to child component. It is immutable.
const RestaurantCard = (props) => {
    const {resList} = props; // Destructuring of props object
    const {name, cuisines} = resList.info; // Destructuring of resList object
    return (
        <div className = "res-card" style = {Style}>
            <img className = "res-logo"src = "https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5-500x500.jpg"/>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{resList.info.avgRating} stars</h2>
            <h2>{resList.info.sla.slaString}</h2>
        </div>
    )
}



const AppLayout = () => {
    return (
        <div className = "app">
            {/* Header */}
            <Header/>
            {/* Body */}
            <Body/>
            {/* Footer */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);