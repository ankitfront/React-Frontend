import React from "react";
import DashboardSidebar from "../Components/Dashboard/DashboardSidebar";
import DashboardNavbar from "../Components/Dashboard/DashboardNavbar";
import StatsCards from "../Components/Dashboard/StatsCards";
import ProductsSection from "../Components/Dashboard/ProductsSection";
import RecentActivity from "../Components/Dashboard/RecentActivity";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#F6F7FC]">     
      <DashboardSidebar />   
      <div className="flex-1">
        <DashboardNavbar />
        <div className="p-8">
          <StatsCards />
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="col-span-2">
              <ProductsSection />
            </div>

            <div>
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;