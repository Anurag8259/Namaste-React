import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    // Make sure that you are subscribing to the correct portion of the store
    // If not it will be a huge performance loss
    // Suppose anything unrelated changes in store , the cart will reload.
    // const cartItems = useSelector((store) => store);
    //      - It will work but is inefficient
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        <div className = "text-center w-6/12 m-auto">
            <h1 className = "text-center text-2xl p-4 m-4 font-bold">Cart</h1>
            <button className = "m-4 py-2 px-4 bg-red-600 rounded-lg cursor-pointer hover:bg-red-400" onClick = {handleClearCart}>Clear Button</button>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map((x) => (
                    <ItemList item = {x} key={x?.product_id ?? x}></ItemList>
                ))
            )}

        </div>
    )
}

export default Cart;