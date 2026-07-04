import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer hover:shadow-lg transition"
    >
      <div className={`h-40 bg-gradient-to-r ${product.imageColor}`}></div>

      <div className="p-5">
        <p className="text-xs font-bold uppercase text-indigo-500">
          {product.category}
        </p>

        <h2 className="text-2xl font-bold mt-2">
          {product.name}
        </h2>

        <p className="text-yellow-500 mt-3">
          ⭐ {product.rating}
        </p>

        <div className="flex justify-between items-center mt-5">
          <h2 className="text-3xl font-bold">
            ₹{product.price}
          </h2>

          <button
            onClick={(e) => {
              e.stopPropagation();
              alert("Added to cart");
            }}
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;