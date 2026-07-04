import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  ClipboardList,
  User,
} from "lucide-react";

const OrdersSidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/",
    },
    {
      name: "Products",
      icon: <Package size={20} />,
      path: "/products",
    },
    {
      name: "Orders",
      icon: <ClipboardList size={20} />,
      path: "/orders",
    },
    {
      name: "Cart",
      icon: <ShoppingCart size={20} />,
      path: "/cart",
    },
    {
      name: "Profile",
      icon: <User size={20} />,
      path: "/profile",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-3 px-6 py-6 border-b">
          <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-xl font-bold">
            S
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              ShopAdmin
            </h2>
            <p className="text-sm text-gray-400">
              Nimbus UI
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-5 px-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-4 rounded-xl mb-2 transition-all font-medium ${
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

      {/* Upgrade Card */}
      <div className="p-4">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-500 p-5 text-white">
          <h3 className="text-xl font-bold">
            Go Pro
          </h3>

          <p className="text-sm text-indigo-100 mt-2">
            Unlock premium order analytics and advanced reports.
          </p>

          <button className="w-full mt-5 bg-white text-indigo-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition">
            Upgrade Plan
          </button>
        </div>
      </div>
    </aside>
  );
};

export default OrdersSidebar;