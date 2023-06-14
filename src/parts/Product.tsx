import { useDispatch, useSelector } from "react-redux";
import {
  setCartItems,
  setTotalCartProducts,
  WearData,
} from "../redux-components/categoriesSlice";
import { RootState } from "../redux-components/store";
import Button from "./s-components/Button";

interface ProductProps {
  product: WearData;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.categories.cartItems
  );
  const { id, name, imageUrl, price } = product;

  const addProductToCart = () => {
    const existingCartItem = cartItems.find((item) => item.id === id);
    if (existingCartItem) {
      return cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : { ...item }
      );
    }

    return [...cartItems, product];
  };

  const handleButtonClick = () => {
    dispatch(setCartItems(addProductToCart()));
    dispatch(setTotalCartProducts(addProductToCart()));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <p className="product-title">{name}</p>
        <p className="product-cost">${price}</p>
      </div>
      <Button
        additionalClasses="product-buy-button"
        onClick={handleButtonClick}
      >
        Add to card
      </Button>
    </div>
  );
};

export default Product;
