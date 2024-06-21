import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const clearCartHandler = () => {
        dispatch(clearCart());
    }

    return (
        <div className="m-5 p-4 text-center">
            <h1 className="font-bold text-2xl">Cart Page</h1>
            <div className="w-8/12 m-auto">
                <button 
                className="m-2 p-1 bg-red-600 text-white rounded-lg"
                onClick={clearCartHandler}
                >Clear cart</button>
                {cartItems.length === 0 && <h1 className="font-light">Your Cart is empty. Please add items to your cart!!</h1>}
               <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;