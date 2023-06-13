import { MouseEventHandler } from "react";
import { default as Cart } from "../../assets/shopping-bag.svg";

const CartIcon = (props: { onClick: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div className="cart-icon-container" onClick={props.onClick}>
      <img src={Cart} alt="cart" className="shopping-icon" />
      <p className="item-count">0</p>
    </div>
  );
};

export default CartIcon;
