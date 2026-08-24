import {useState, useEffect} from "react";
import {MENU_API} from "../utils/constants";

const useRestaurantMenu = (props) => {
    const [brandId , storeId] = props;
    const [menu, setMenu] = useState(null);

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
    return menu;
};

export default useRestaurantMenu;