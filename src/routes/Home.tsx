import { AxiosInstance } from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../parts/category";
import { RootState } from "../redux-components/store";
import { setMainCaterories } from "../redux-components/categoriesSlice";

interface HomeProps {
  api: AxiosInstance;
}

const Home: React.FC<HomeProps> = ({ api }) => {
  const categories = useSelector(
    (state: RootState) => state.categories.mainCategories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    api.get("categories.json").then((resp) => {
      const category = resp.data;

      dispatch(setMainCaterories(category));
    });
  }, []);

  return (
    <div className="categories-container">
      {categories &&
        categories.map(({ title, imageURL }) => {
          return (
            <Category imageURL={imageURL} key={title}>
              {title}
            </Category>
          );
        })}
      {/* {listOfProducts &&
          Object.keys(listOfProducts).map()} */}
    </div>
  );
};

export default Home;
