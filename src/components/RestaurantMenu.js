import {useParams} from "react-router";
import {useState} from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useRestaurantCategory from "../utils/useRestaurantCategory";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const { brandId, storeId } = useParams();
    const menu = useRestaurantMenu([brandId, storeId]);
    const category = useRestaurantCategory([brandId,storeId]);
    const [showContent,setShowContent] = useState(0);

    
    if(category === null){
        return <Shimmer/>;
    }

    return (
        <div className = "text-center">
            <h1 className = "font-bold my-6 text-2xl">{menu?.[0]?.brand_name}</h1>
            {/* <h2>Menu</h2> */}
            {/* <ul>
                {menu?.map((food)=>{
                    return <li className = "font-bold" key={food?.product_id}>{food?.product_name} - {food?.price}</li>;
                })}
            </ul> */}
            {/* Categories Accordions */}
            <ul>
                {category?.map((c,index)=>{
                    return (
                        <RestaurantCategory collection = {c} key = {c.collection_id} showContent = {index == showContent ? true:false} setShowContent = {() => setShowContent(index)}/>
                    )
                })}
            </ul>

        </div>

    );

}
export default RestaurantMenu;