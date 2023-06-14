import { useSelector } from "react-redux";
import ProductCheckout from "../parts/s-components/ProductCheckout";
import { RootState } from "../redux-components/store";

const Checkout = () => {
  const cartItems = useSelector(
    (state: RootState) => state.categories.cartItems
  );
  const { totalCost } = useSelector(
    (state: RootState) => state.categories.totalCartProducts
  );

  return (
    <div className="page-wrapper">
      <div className="page-table-header">
        <p>Product</p>
        <p>Description</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      <div className="products-checkout-container">
        {cartItems && cartItems.map((item) => <ProductCheckout {...item} />)}
      </div>
      <div className="page-table-footer">
        <div className="total-cost-wrapper">
          <p>TOTAL:</p>
          <p>${totalCost}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
