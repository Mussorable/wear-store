import { useNavigate } from "react-router-dom";

interface CategoryProps {
  imageURL: string;
  title: string;
}

const Category: React.FC<CategoryProps> = ({ imageURL, title }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate("shop/" + title.toLowerCase());

  return (
    <div className="category-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default Category;
