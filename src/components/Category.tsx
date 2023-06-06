import { Link } from "react-router-dom";

interface CategoryProps {
  children: React.ReactNode;
  imageURL: string;
}

const Category: React.FC<CategoryProps> = ({ children, imageURL }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      />
      <div className="category-body-container">
        <h2>{children}</h2>
        <Link to={"/"}>Shop now</Link>
      </div>
    </div>
  );
};

export default Category;
