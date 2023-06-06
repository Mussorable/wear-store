import { AxiosInstance } from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "./category";
import { RootState } from "../redux-components/store";
import { setMainCaterories } from "../redux-components/categoriesSlice";

interface HomeProps {
  api: AxiosInstance;
}

const Home: React.FC<HomeProps> = ({ api }) => {
  const categoriesEndpoint = "categories.json";

  const categories = useSelector(
    (state: RootState) => state.categories.mainCategories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    api.get(categoriesEndpoint).then((resp) => {
      const category = resp.data;

      dispatch(setMainCaterories(category));
    });
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <>
      {categories &&
        categories.map((category) => {
          return (
            <div key={category.title} className="categories-container">
              <Category>{category.title}</Category>
            </div>
          );
        })}
    </>
  );
};

export default Home;
