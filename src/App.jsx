
import './App.css'
import Cart from './Cart';
import { CartProvider } from './CartContext'
import Product from './Product';

function App() {

  const phonedata =[
    {
       "id": 4,
       "title": "OPPOF19",
       "description": "OPPO F19 is officially announced on April 2021.",
       "price": 280,
       "discountPercentage": 17.91,
       "rating": 4.3,
       "stock": 123,
       "brand": "OPPO",
       "category": "smartphones",
       "images": "https://5.imimg.com/data5/SELLER/Default/2023/9/339811384/LS/UP/CJ/195428570/oppo-f19-mobile-phone-500x500.jpeg",
    }      
];
  
  return (
      <CartProvider>
         <div className='product'>
          {phonedata.map((pro) => (
            <Product {...pro} key={pro.id} />
          ))}
         </div>
         <Cart/>
      </CartProvider>
  );
}

export default App;
