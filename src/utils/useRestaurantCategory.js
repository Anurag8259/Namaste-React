import {useState, useEffect} from "react";
import {MENU_API} from "../utils/constants";

const useRestaurantMenu = (props) => {
    // return null;
    const [brandId , storeId] = props;
    const [categories, setCategory] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[brandId, storeId]);

    const fetchMenu = async () => {
        
        const bId = brandId ?? '29';
        const sId = storeId ?? '10157';
        const url = `${MENU_API}${bId}/store_id/${sId}/source_id/13`;
        const data = await fetch(url);

        const json = await data.json();

        setCategory(json.data?.collections);
        console.log(json.data?.collections);
    }
    return categories;
};

export default useRestaurantMenu;