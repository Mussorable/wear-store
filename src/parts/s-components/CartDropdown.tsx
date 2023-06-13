import Button from "./Button";

const CartDropdown = () => {
  return (
    <div className="dropdown-container">
      <div className="cart-products">
        <p>PRODUCT</p>
        <p>PRODUCT</p>
        <p>PRODUCT</p>
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
