import { MouseEventHandler, useEffect } from "react";
import { useSelector } from "react-redux";
import { default as Cart } from "../../assets/shopping-bag.svg";
import { RootState } from "../../redux-components/store";

const CartIcon = (props: { onClick: MouseEventHandler<HTMLDivElement> }) => {
  const { totalQuantity } = useSelector(
    (state: RootState) => state.categories.totalCartProducts
  );

  return (
    <div className="cart-icon-container" onClick={props.onClick}>
      <img src={Cart} alt="cart" className="shopping-icon" />
      <p className="item-count">{totalQuantity}</p>
    </div>
  );
};

export default CartIcon;
