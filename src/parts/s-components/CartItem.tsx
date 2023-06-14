const CartItem = (props: { title: string; quantity: number }) => {
  const { title, quantity } = props;
  return (
    <div className="cart-item">
      <p className="cart-item-title">{title}</p>
      <p className="cart-item-quantity">{quantity}</p>
    </div>
  );
};

export default CartItem;
