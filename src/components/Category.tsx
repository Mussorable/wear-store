import Button from "./s-components/Button";

interface CategoryProps {
  children: React.ReactNode;
}

const Category: React.FC<CategoryProps> = ({ children }) => {
  return (
    <div className="category-container">
      <div className="category-body-container">
        <h2>{children}</h2>
        <Button>Shop Now</Button>
      </div>
    </div>
  );
};

export default Category;
