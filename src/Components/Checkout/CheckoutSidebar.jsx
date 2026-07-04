import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  ClipboardList,
  CreditCard,
  User,
} from "lucide-react";

const CheckoutSidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <Package size={20} />,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: <ClipboardList size={20} />,
    },
    {
      name: "Cart",
      path: "/cart",
      icon: <ShoppingCart size={20} />,
    },
    {
      name: "Checkout",
      path: "/checkout",
      icon: <CreditCard size={20} />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={20} />,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 px-6 py-6 border-b">
          <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-xl font-bold">
            S
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1E2246]">
              ShopAdmin
            </h2>
            <p className="text-sm text-gray-400">
              Nimbus UI
            </p>
          </div>
        </div>

        <nav className="mt-5 px-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-4 rounded-xl mb-2 font-medium transition ${
                  isActive
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-500 hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-4">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-5 text-white">
          <h3 className="text-xl font-bold">
            Secure Checkout
          </h3>

          <p className="text-sm mt-2 text-indigo-100">
            Fast, secure, and encrypted payment experience.
          </p>

          <button className="w-full mt-5 bg-white text-indigo-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CheckoutSidebar;