import React, { useState } from "react";
import dashboardProducts from "../../data/dashboardProducts";
import ProductCard from "./ProductCard";

const categories = ["All", "Electronics", "Fashion", "Accessories"];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? dashboardProducts
      : dashboardProducts.filter(
          (product) => product.category === activeCategory
        );

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#1E2246]">
          Featured Products
        </h2>

        <button className="text-indigo-600 font-semibold">
          View All
        </button>
      </div>

      <div className="flex gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-xl transition ${
              activeCategory === category
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;