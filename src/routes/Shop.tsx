import { AxiosInstance } from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../parts/Product";
import { setHats } from "../redux-components/categoriesSlice";
import { RootState } from "../redux-components/store";

interface ShopProps {
  api: AxiosInstance;
}

const Shop: React.FC<ShopProps> = ({ api }) => {
  const hats = useSelector((state: RootState) => state.categories.hats);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("staff/hats.json").then((resp) => {
      const hats = resp.data;
      dispatch(setHats(hats));
    });
  }, []);

  return (
    <div className="products-container">
      {hats &&
        hats.map((product) => <Product key={product.id} product={product} />)}
    </div>
  );
};

export default Shop;
