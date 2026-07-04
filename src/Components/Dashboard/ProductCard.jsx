import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition duration-300 cursor-pointer"
    >
      {/* Product Preview */}
      <div
        className={`h-44 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
      >
        <ShoppingCart className="w-16 h-16 text-white opacity-80" />
      </div>

      {/* Card Body */}
      <div className="p-5">
        <span className="inline-block text-xs font-semibold bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
          {product.category}
        </span>

        <h2 className="text-xl font-bold text-gray-800 mt-4">
          {product.name}
        </h2>

        <div className="flex items-center gap-2 mt-3">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-gray-600">{product.rating}</span>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div>
            <h3 className="text-2xl font-bold text-[#1E2246]">
              ₹{product.price}
            </h3>

            <p
              className={`text-sm font-medium ${
                product.stock === "In Stock"
                  ? "text-green-500"
                  : product.stock === "Low Stock"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {product.stock}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              alert("Added to cart!");
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-5 py-2 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;