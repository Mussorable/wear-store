import { WearData } from "../redux-components/categoriesSlice";
import Button from "./s-components/Button";

interface ProductProps {
  product: WearData;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { id, name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <p className="product-title">{name}</p>
        <p className="product-cost">{price}</p>
      </div>
      <Button additionalClasses="product-buy-button">Add to card</Button>
    </div>
  );
};

export default Product;
