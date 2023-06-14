import { WearData } from "../../redux-components/categoriesSlice";
import { default as Remove } from "../../assets/cross.svg";
import { default as Left } from "../../assets/left.svg";
import { default as Right } from "../../assets/right.svg";

const ProductCheckout: React.FC<WearData> = (item) => {
  const { quantity, name, imageUrl, price } = item;
  return (
    <div className="product-block">
      <img className="product-image" src={imageUrl} alt="product-image" />
      <h3>{name}</h3>
      <div className="quantity-control-product-wrapper">
        <img src={Left} alt="decrease button" width="24" height="24" />
        <div>{quantity}</div>
        <img src={Right} alt="increase button" width="24" height="24" />
      </div>
      <p>${quantity * price}</p>
      <img src={Remove} width="17" height="17" alt="remove-product-button" />
    </div>
  );
};

export default ProductCheckout;
