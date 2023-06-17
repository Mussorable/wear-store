import { Fragment } from "react";
import { useSelector } from "react-redux";
import { WearData } from "../redux-components/categoriesSlice";
import { RootState } from "../redux-components/store";
import Product from "./Product";

import "../styles/style.css";
import { Link } from "react-router-dom";

const CategoryPreview = () => {
  const listOfProducts = useSelector(
    (state: RootState) => state.categories.listOfProducts
  );

  return (
    <div className="products-container">
      {listOfProducts &&
        Object.keys(listOfProducts).map((title: string) => {
          return (
            <Fragment key={title}>
              <h2 className="category-title">
                <Link to={title}>{title.toUpperCase()}</Link>
              </h2>
              <div className="product-category-list">
                {listOfProducts[title]
                  .filter((_, id: number) => id < 4)
                  .map((product: WearData) => (
                    <Product key={product.id} product={product} />
                  ))}
              </div>
            </Fragment>
          );
        })}
    </div>
  );
};

export default CategoryPreview;
