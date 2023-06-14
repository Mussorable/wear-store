import { WearData } from "../../redux-components/categoriesSlice";

const CartItem: React.FC<WearData> = (item) => {
  const { quantity, name, imageUrl, price } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="product image" />
      <div className="cart-details-container">
        <p className="cart-item-title">{name}</p>
        <div className="cart-price-wrapper">
          <p className="cart-item-quantity">{quantity}</p>
          <p>{`$${quantity * price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
