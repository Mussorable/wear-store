import {
  setCartItems,
  setDeleteProductFromCart,
  setTotalCartProducts,
  WearData,
} from "../../redux-components/categoriesSlice";
import { default as Remove } from "../../assets/cross.svg";
import { default as Left } from "../../assets/left.svg";
import { default as Right } from "../../assets/right.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-components/store";

const ProductCheckout: React.FC<WearData> = (item) => {
  const cartItems = useSelector(
    (state: RootState) => state.categories.cartItems
  );
  const totalCartProducts = useSelector(
    (state: RootState) => state.categories.totalCartProducts
  );

  const dispatch = useDispatch();
  const { quantity, name, imageUrl, price, id } = item;

  const removeCartItemFromCart = () => {
    const existingCartItem = cartItems.find(
      (item) => item.id === id
    ) as WearData;

    if (existingCartItem?.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== item.id);
    }

    return cartItems.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity: item.quantity - 1 }
        : { ...cartItem }
    );
  };

  const addCartItemToCart = () => {
    const existingCartItem = cartItems.find((item) => item.id === id);
    if (existingCartItem) {
      return cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : { ...item }
      );
    }
  };

  const handleDecreaseItemClick = () => {
    dispatch(setCartItems(removeCartItemFromCart()));
    dispatch(setTotalCartProducts(removeCartItemFromCart()));
  };

  const handleIncreaseItemClick = () => {
    dispatch(setCartItems(addCartItemToCart()));
    dispatch(setTotalCartProducts(addCartItemToCart()));
  };

  const handleRemoveProduct = () => {
    const filteredArray = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    dispatch(setCartItems(filteredArray));
    dispatch(setTotalCartProducts(filteredArray));
  };

  return (
    <div className="product-block">
      <img className="product-image" src={imageUrl} alt="product-image" />
      <h3>{name}</h3>
      <div className="quantity-control-product-wrapper">
        <button onClick={handleDecreaseItemClick}>
          <img src={Left} alt="decrease button" width="27" height="27" />
        </button>
        <p>{quantity}</p>
        <button onClick={handleIncreaseItemClick}>
          <img src={Right} alt="increase button" width="27" height="27" />
        </button>
      </div>
      <p>${quantity * price}</p>
      <button onClick={handleRemoveProduct}>
        <img src={Remove} width="17" height="17" alt="remove-product-button" />
      </button>
    </div>
  );
};

export default ProductCheckout;
