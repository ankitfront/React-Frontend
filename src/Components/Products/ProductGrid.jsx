import products from "../../data/products";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;