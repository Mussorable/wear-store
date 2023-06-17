import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../parts/CategoryPreview";
import ProductCard from "./ProductCard";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<ProductCard />} />
    </Routes>
  );
};

export default Shop;
