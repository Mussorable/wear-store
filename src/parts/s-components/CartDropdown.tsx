import { useSelector } from "react-redux";
import { RootState } from "../../redux-components/store";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const cartLogs = useSelector(
    (state: RootState) => state.categories.cartItems
  );
  const { totalCost } = useSelector(
    (state: RootState) => state.categories.totalCartProducts
  );

  return (
    <div className="dropdown-container">
      <div className="cart-products">
        {cartLogs &&
          cartLogs.map((item) => <CartItem key={item.id} {...item} />)}
      </div>
      <div className="dropdown-footer">
        <div className="dropdown-total-wrapper">
          <p>TOTAL:</p>
          <p>${totalCost}</p>
        </div>
        <Link className="input button" to={"/checkout"}>
          Go to checkout
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;
