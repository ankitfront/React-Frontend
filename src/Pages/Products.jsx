import ProductSidebar from "../Components/Products/ProductSidebar";
import ProductNavbar from "../Components/Products/ProductNavbar";
import SearchFilter from "../Components/Products/SearchFilter";
import ProductGrid from "../Components/Products/ProductGrid";

const Products = () => {
  return (
    <div className="flex min-h-screen bg-[#f5f6fc]">
      <ProductSidebar />
      <div className="flex-1">
        <ProductNavbar />
        <div className="p-8">
          <SearchFilter />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Products;