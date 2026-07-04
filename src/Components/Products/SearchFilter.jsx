import React, { useState } from "react";
import { Search, X } from "lucide-react";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Accessories",
];

const SearchFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4">
  
        <div className="flex-1 flex items-center bg-white rounded-2xl border border-gray-200 px-4 py-3 shadow-sm">
          <Search size={20} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search products by name..."
            className="ml-3 w-full outline-none text-gray-700 placeholder:text-gray-400"
          />
        </div>

        <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm hover:bg-gray-50 transition">
          <span className="font-medium text-gray-700">
            All Categories
          </span>

          <X size={16} className="text-gray-400" />
        </button>

        <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm hover:bg-gray-50 transition">
          <span className="font-medium text-gray-700">
            Sort: Price Low → High
          </span>

          <X size={16} className="text-gray-400" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
              activeCategory === category
                ? "bg-indigo-600 text-white"
                : "text-gray-500 hover:bg-white hover:shadow"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;