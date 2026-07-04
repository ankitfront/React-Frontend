import React from "react";
import CartSidebar from "../Components/Cart/CartSidebar";
import CartNavbar from "../Components/Cart/CartNavbar";
import CartItems from "../Components/Cart/CartItems";
import OrderSummary from "../Components/Cart/OrderSummary";
import { CartProvider } from "../context/CartContext";

const Cart = () => {
  return (
    <CartProvider>
      <div className="flex min-h-screen bg-[#F6F7FC]">
        {/* Sidebar */}
        <CartSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <CartNavbar />

          {/* Page Content */}
          <div className="p-8">
            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-[#1E2246]">
                Shopping Cart
              </h1>

              <p className="text-gray-500 mt-2">
                Review your selected products before checkout.
              </p>
            </div>

            {/* Cart Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left */}
              <div className="lg:col-span-2">
                <CartItems />
              </div>

              {/* Right */}
              <div>
                <OrderSummary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default Cart;