import "./App.css";
import PropTypes from 'prop-types';
import { useCart } from "./CartContext";

const Product = ({ id, title, description, price, discountPercentage, rating, stock, brand, category, images }) => {
    const {increaseQty,decreaseQty,addToCart,cartItems} =useCart();
     
    const handleAddToCart = () => {
      const itemCart = cartItems.find(items => items.id ===id);
      if(itemCart) {
        increaseQty(id);
      }else{
        addToCart({id, title,price,quantity: 1 });
      }
    };

    return (
        <>
          <div className="prods-details">
            <h1 className="title">Title: {title}</h1>
            <p className="description">Description: {description}</p>
            <p className="price">Price: ${price}</p>
            <p className="discount">Discount Percentage: {discountPercentage}%</p>
            <p className="rating">Rating: {rating}</p>
            <p className="stock">Stock: {stock}</p>
            <p className="brand">Brand: {brand}</p>
            <p className="category">Category: {category}</p>
          </div>
          <div>
            <button className="btn" onClick={handleAddToCart} >Add</button>
            <button className="btn" onClick={() => decreaseQty(id)} >Remove</button>
          </div>
          <div className="prod-img">
          <img className="img" src={images} alt={title} />
          </div>
        </>
      );
    };
    
    Product.propTypes = {
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discountPercentage: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      images: PropTypes.string.isRequired,
    };
    
    export default Product;    