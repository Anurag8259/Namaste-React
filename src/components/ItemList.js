import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
    const {item} = props;
    const dispatch = useDispatch();

    const handleAddItem = () => {
        // Dispatch the addItem action with the entire item (or change to desired payload)
        dispatch(addItem(item));
    }

    return (
        <div data-testid="foodItem" className="m-4 p-4 flex justify-between border rounded-lg shadow-lg hover:bg-amber-300">
            <div className="px-2">
                <span className ="font-bold">{item?.product_name}</span>
                <p className = "py-2 font-light">{item?.small_description}</p>
                <span>INR {item?.price}</span>
            </div>
            <div className = "max-w-55">
                <button className="px-4 py-2 m-4 absolute bg-black text-white rounded-lg cursor-pointer" 
                    onClick={handleAddItem}
                >Add + </button>
                <img className="rounded-lg" src={item?.product_imageUrl} alt={item?.product_name} />
            </div>
        </div>
    )
}
export default ItemList;