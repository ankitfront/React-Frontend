import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    ShoppingCart,
    Star,
    ArrowLeft,
    Headphones,
    Watch,
    Briefcase,
} from "lucide-react";

import ProductSidebar from "../Components/Products/ProductSidebar";
import ProductNavbar from "../Components/Products/ProductNavbar";

const products = [
    {
        id: 1,
        name: "Wireless Headphone",
        category: "Electronics",
        price: 2500,
        rating: 4.5,
        reviews: 214,
        stock: "In Stock",
        units: 12,
        description:
            "Premium over-ear wireless headphones with active noise cancellation, 30-hour battery life and plush memory foam cushions for all-day comfort.",
        gradient: "from-indigo-500 to-purple-500",
        icon: Headphones,
    },
    {
        id: 2,
        name: "Running Shoes",
        category: "Fashion",
        price: 3200,
        rating: 4.2,
        reviews: 140,
        stock: "In Stock",
        units: 8,
        description:
            "Lightweight running shoes with responsive cushioning and breathable mesh upper.",
        gradient: "from-orange-400 to-red-500",
        icon: ShoppingCart,
    },
    {
        id: 3,
        name: "Smart Watch",
        category: "Electronics",
        price: 5900,
        rating: 4.7,
        reviews: 300,
        stock: "Low Stock",
        units: 4,
        description:
            "Premium smartwatch with AMOLED display, GPS and heart-rate monitoring.",
        gradient: "from-green-400 to-cyan-500",
        icon: Watch,
    },
    {
        id: 4,
        name: "Leather Backpack",
        category: "Accessories",
        price: 1850,
        rating: 4.4,
        reviews: 180,
        stock: "In Stock",
        units: 15,
        description:
            "Stylish leather backpack with multiple compartments for daily use.",
        gradient: "from-pink-500 to-rose-500",
        icon: Briefcase,
    },
];

const ProductDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const product =
        products.find((item) => item.id === Number(id)) || products[0];

    const Icon = product.icon;

    return (
        <div className="flex min-h-screen bg-[#F6F7FC]">

            <ProductSidebar />
            <div className="flex-1">

                <ProductNavbar />

                <div className="p-8">

                    <h1 className="text-4xl font-bold text-[#1E2246]">
                        Product Details
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Full information for the selected product
                    </p>

                    <div className="flex gap-2 mt-8 text-sm">
                        <span className="text-indigo-600 font-semibold">
                            Products
                        </span>

                        <span className="text-gray-400">/</span>

                        <span className="font-semibold">
                            {product.name}
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-8">


                        <div className="bg-white rounded-3xl p-6 shadow-sm">

                            <div
                                className={`rounded-3xl h-[380px] bg-gradient-to-br ${product.gradient}
                flex items-center justify-center`}
                            >
                                <Icon
                                    className="text-white"
                                    size={120}
                                />
                            </div>

                            <div className="grid grid-cols-4 gap-4 mt-6">

                                {products.map((item) => {
                                    const SmallIcon = item.icon;

                                    return (
                                        <div
                                            key={item.id}
                                            className={`rounded-2xl h-24 bg-gradient-to-br ${item.gradient}
                      flex items-center justify-center cursor-pointer`}
                                        >
                                            <SmallIcon
                                                className="text-white"
                                                size={40}
                                            />
                                        </div>
                                    );
                                })}

                            </div>

                        </div>



                        <div className="bg-white rounded-3xl p-8 shadow-sm">

                            <p className="uppercase text-indigo-600 font-bold tracking-wider">
                                {product.category}
                            </p>

                            <h2 className="text-5xl font-bold text-[#1E2246] mt-3">
                                {product.name}
                            </h2>

                            <div className="flex items-center gap-3 mt-6">

                                <Star
                                    size={18}
                                    className="fill-yellow-400 text-yellow-400"
                                />

                                <span className="font-semibold">
                                    {product.rating}
                                </span>

                                <span className="text-gray-400">
                                    • {product.reviews} Reviews
                                </span>

                                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                                    {product.stock}
                                </span>

                            </div>

                            <h2 className="text-5xl font-bold text-[#1E2246] mt-8">
                                ₹{product.price}
                            </h2>

                            <p className="text-gray-500 leading-8 mt-6">
                                {product.description}
                            </p>

                            <div className="grid grid-cols-3 gap-4 mt-8">

                                <div className="bg-gray-50 rounded-2xl p-5">
                                    <p className="text-gray-400 text-sm uppercase">
                                        Availability
                                    </p>

                                    <h3 className="font-bold mt-2">
                                        {product.stock}
                                    </h3>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-5">
                                    <p className="text-gray-400 text-sm uppercase">
                                        Category
                                    </p>

                                    <h3 className="font-bold mt-2">
                                        {product.category}
                                    </h3>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-5">
                                    <p className="text-gray-400 text-sm uppercase">
                                        Rating
                                    </p>

                                    <h3 className="font-bold mt-2">
                                        {product.rating} / 5
                                    </h3>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl flex items-center justify-center gap-2 transition">
                                    <ShoppingCart size={20} />
                                    Add to Cart
                                </button>

                                <button
                                    onClick={() => navigate("/products")}
                                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-indigo-600 py-4 rounded-2xl flex items-center justify-center gap-2 transition"
                                >
                                    <ArrowLeft size={20} />
                                    Back to Products
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-3xl p-6 shadow-sm mt-8">
                        <h2 className="text-2xl font-bold text-[#1E2246] mb-6">
                            You may also like
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {products
                                .filter((item) => item.id !== product.id)
                                .map((item) => {
                                    const RelatedIcon = item.icon;

                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => navigate(`/products/${item.id}`)}
                                            className="flex items-center gap-4 border border-gray-100 rounded-2xl p-4 hover:shadow-md cursor-pointer transition"
                                        >
                                            <div
                                                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                                            >
                                                <RelatedIcon
                                                    size={36}
                                                    className="text-white"
                                                />
                                            </div>

                                            <div>
                                                <h3 className="font-bold text-lg text-[#1E2246]">
                                                    {item.name}
                                                </h3>

                                                <p className="text-gray-500 text-sm mt-1">
                                                    {item.category}
                                                </p>

                                                <p className="text-indigo-600 font-bold mt-2">
                                                    ₹{item.price}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

