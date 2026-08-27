import {useState} from "react";
import ItemList from "./ItemList"

//Controlled Component
const RestaurantCategory = ({collection,showContent,setShowContent}) => {

    const products = collection?.products;
    // const [showContent,setShowContent] = useState(false);

    const handleClick = () => {
        // setShowContent(x => !x);
        // or
        // setShowContent(!showContent);
        setShowContent();
    }

    // console.log("Prod"+products)
    return (
        <div className = "m-4 px-4 py-4 w-6/12 mx-auto bg-yellow-100 shadow-lg rounded-lg">
            <div className = "flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{collection.collection_name}({collection.totalProducts})</span>
                <span>⬇️</span>
            </div>
            {showContent && products?.map((p)=>{
                return <ItemList item = {p} key= {p?.product_id}></ItemList>
            })
            }
        

        </div>
    )
}

export default RestaurantCategory;