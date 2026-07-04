import React from "react";
import OrdersSidebar from "../Components/Orders/OrdersSidebar";
import OrdersNavbar from "../Components/Orders/OrdersNavbar";
import OrderStats from "../Components/Orders/OrderStats";
import OrdersTable from "../Components/Orders/OrdersTable";

const Orders = () => {
  return (
    <div className="flex min-h-screen bg-[#F6F7FC]">
      <OrdersSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        
        <OrdersNavbar />

        <div className="flex-1 overflow-y-auto p-8">

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1E2246]">
              Orders
            </h1>

            <p className="text-gray-500 mt-2">
              Manage, track and monitor all customer orders.
            </p>
          </div>

          <OrderStats />
          <div className="mt-8">
            <OrdersTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;