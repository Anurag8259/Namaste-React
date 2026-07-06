import {CDN_URL} from "../utils/constants"; // Named Import - Importing a named export from a module. The name of the import should be same as the name of the export.


const Style = {
    backgroundColor : "#f8f7eb"
}

const RestaurantCard = (props) => {
    const {resList} = props; // Destructuring of props object
    const {name, cuisines} = resList.info; // Destructuring of resList object
    return (
        <div className = "res-card" style = {Style}>
            <img className = "res-logo"src = {CDN_URL}/>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{resList.info.avgRating} stars</h2>
            <h2>{resList.info.sla.slaString}</h2>
        </div>
    )
}

export default RestaurantCard;