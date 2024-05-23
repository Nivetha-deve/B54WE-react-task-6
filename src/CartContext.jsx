import { useState } from "react";
import { useContext,createContext } from "react";

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) =>{
   const[cartItems,setCartItems] =useState([]);

   const increaseQty =(id) => {
    setCartItems((payItems) =>
        payItems.map((items) =>
        items.id === id ? {...items,quantity: items.quantity +1} : items
    )
    );
   };

   const decreaseQty = (id) => {
    setCartItems((payItems) =>
        payItems.map((items) =>
        items.id === id && items.quantity > 0 ? {...items,quantity: items.quantity - 1 } : items
        )
    );
   };
 
const addToCart = (newItems) => {
    setCartItems((payItems) => {
      const existItems = payItems.find(item => item.id === newItems.id);   
      if(existItems) {
        return payItems.map((items) =>
            items.id === newItems.id ? {...items,quantity: items.quantity +1 } : items
          );
      } else {
        return [...payItems, {...newItems, quantity:1}];
      }  
});
};

 const removeFromCart = (id) => {
    setCartItems((payItems) => payItems.filter((items) => items.id !== id));
 };

const TotalQty = () => {
    return cartItems.reduce((total, items) => total+ items.quantity ,0);
};

const TotalAmount = () => {
    return cartItems.reduce((total,items) => total + items.quantity*items.price, 0);
};

return (
   <CartContext.Provider 
     value={{
        cartItems,
        increaseQty,
        decreaseQty,
        addToCart,
        removeFromCart,
        TotalQty,
        TotalAmount,
     }}
   >
    {children}
   </CartContext.Provider>
);
};