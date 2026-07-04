import React from "react";
import { Search, Bell } from "lucide-react";

const DashboardNavbar = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-[#F6F7FC]">
   
      <div>
        <h1 className="text-4xl font-bold text-[#1E2246]">
          Dashboard
        </h1>
        <p className="text-gray-400 mt-1">
          Welcome back, here's your store overview
        </p>
      </div>

   
      <div className="flex items-center gap-5">
        
        <div className="flex items-center bg-white border border-gray-200 rounded-2xl px-4 py-3 w-[320px] shadow-sm">
          <Search size={20} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search products, orders..."
            className="w-full ml-3 outline-none text-gray-700 placeholder:text-gray-400"
          />
        </div>

        <button className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition">
          <Bell size={22} className="text-gray-600" />
        </button>


        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-2 shadow-sm">
          <div>
            <h3 className="font-semibold text-gray-900">
              Raktim.
            </h3>

            <p className="text-xs text-gray-500">
              Admin
            </p>
          </div>

          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white font-bold">
            RM
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;