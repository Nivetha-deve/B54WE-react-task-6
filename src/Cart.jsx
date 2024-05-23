import "./App";
import { useCart } from "./CartContext";

const Cart = () => {
   
   const { TotalAmount,TotalQty } = useCart();
   return(
   <div className="cart">Cart
    <p className='cart-qty'>Total Quantity:{TotalAmount()}</p>
    <p className='cart-amount'>Total Amount:${TotalQty()}</p>
   </div>
)};

export default Cart;