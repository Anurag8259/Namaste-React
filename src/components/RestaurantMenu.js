import {useEffect,useState} from "react";
import {useParams} from "react-router";
import Shimmer from "./Shimmer";
import {MENU_API} from "../utils/constants";


const RestaurantMenu = () => {

    const [menu, setMenu] = useState(null);

    const { brandId, storeId } = useParams();

    useEffect(()=>{
        fetchMenu();
    },[brandId, storeId]);

    const fetchMenu = async () => {
        
        const bId = brandId ?? '29';
        const sId = storeId ?? '10157';
        const url = `${MENU_API}${bId}/store_id/${sId}/source_id/13`;
        const data = await fetch(url);

        const json = await data.json();

        setMenu(json.data?.collections?.[0]?.products);
        console.log(json.data?.collections?.[0]?.products);
    }

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