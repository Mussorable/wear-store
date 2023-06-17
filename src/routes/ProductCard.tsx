import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../parts/Product";
import { WearData } from "../redux-components/categoriesSlice";
import { RootState } from "../redux-components/store";

const ProductCard = () => {
  const { category } = useParams();
  const listOfProducts = useSelector(
    (state: RootState) => state.categories.listOfProducts
  );
  const [products, setProducts] = useState(
    category ? listOfProducts[category] : ([] as WearData[])
  );

  useEffect(() => {
    {
      if (category) {
        setProducts(listOfProducts[category]);
      }
    }
  }, [category, listOfProducts]);

  return (
    <div className="products-container">
      <h2 className="category-title">{category?.toUpperCase()}</h2>
      <div className="product-category-list">
        {products &&
          products.map((product: WearData) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductCard;
