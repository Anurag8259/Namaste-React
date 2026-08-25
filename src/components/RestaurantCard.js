import {CDN_URL} from "../utils/constants"; // Named Import - Importing a named export from a module. The name of the import should be same as the name of the export.


// const Style = {
//     backgroundColor : "#f8f7eb"
// }

const RestaurantCard = (props) => {
    const {resList} = props; // Destructuring of props object
    const {brand_name, main_offering} = resList; // Destructuring of resList object

    return (
        <div className = "m-4 py-2 w-48 rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className = "rounded-lg" src = {CDN_URL}/>
            <h1 className = "font-bold text-lg" >{brand_name}</h1>
            <h2>{main_offering}</h2>
            {/* <h2>{resList.info.avgRating} stars</h2>
            <h2>{resList.info.sla.slaString}</h2> */}
        </div>
    )
}

export default RestaurantCard;