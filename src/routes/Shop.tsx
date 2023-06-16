import { Fragment } from "react";
import { useSelector } from "react-redux";
import Product from "../parts/Product";
import { WearData } from "../redux-components/categoriesSlice";
import { RootState } from "../redux-components/store";

const Shop = () => {
  const listOfProducts = useSelector(
    (state: RootState) => state.categories.listOfProducts
  );
  console.log(listOfProducts);

  return (
    <div className="products-container">
      {listOfProducts &&
        Object.keys(listOfProducts).map((title: string) => {
          return (
            <Fragment key={title}>
              <h2 className="category-title">{title}</h2>
              <div className="product-category-list">
                {listOfProducts[title].map((product: WearData) => (
                  <Product key={product.id} product={product} />
                ))}
              </div>
            </Fragment>
          );
        })}
    </div>
  );
};

export default Shop;
