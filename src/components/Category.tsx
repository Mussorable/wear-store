import { Link } from "react-router-dom";

interface CategoryProps {
  children: React.ReactNode;
}

const Category: React.FC<CategoryProps> = ({ children }) => {
  return (
    <div className="category-container">
      <div className="background-image"></div>
      <div className="category-body-container">
        <h2>{children}</h2>
        <Link to={"/"}>Shop now</Link>
      </div>
    </div>
  );
};

export default Category;
