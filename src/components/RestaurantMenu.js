import {useParams} from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { brandId, storeId } = useParams();
    const menu = useRestaurantMenu([brandId, storeId]);

    
    if(menu === null){
        return <Shimmer/>;
    }

    return (
        <div className = "menu">
            <h1>{menu?.[0]?.brand_name}</h1>
            <h2>Menu</h2>
            <ul>
                {menu?.map((food)=>{
                    return <li key={food?.product_id}>{food?.product_name} - {food?.price}</li>;
                })}
            </ul>
        </div>

    );

}
export default RestaurantMenu;