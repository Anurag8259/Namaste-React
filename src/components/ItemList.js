
const ItemList = (props) => {
    const {item} = props;
    // console.log("ItemList item:", item);
    return (
        <div className="m-4 p-4 flex justify-between border rounded-lg shadow-lg hover:bg-amber-300">
            <div className="px-2">
                <span className ="font-bold">{item?.product_name}</span>
                <p className = "py-2 font-light">{item?.small_description}</p>
                <span>INR {item?.price}</span>
            </div>
            <div className = "max-w-55">
                <img className="rounded-lg" src={item.product_imageUrl}></img>
            </div>
        </div>
    )
}
export default ItemList;