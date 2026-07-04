import React from "react";
import { useNavigate } from "react-router-dom";
import ProductSidebar from "../Components/Products/ProductSidebar";
import ProductNavbar from "../Components/Products/ProductNavbar";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-[#F6F7FC]">
      <ProductSidebar />
      <div className="flex-1">
        <ProductNavbar />

        <div className="p-8">
         
          <h1 className="text-4xl font-bold text-[#1E2246]">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your personal information and account settings.
          </p>

          <div className="bg-white rounded-3xl shadow-sm p-8 mt-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                RM
              </div>

              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#1E2246]">
                  raktim.
                </h2>

                <p className="text-gray-500 mt-2">
                  Frontend Developer
                </p>

                <p className="text-gray-500">
                  raktim@gmail.com
                </p>

                <p className="text-gray-500">
                  +91 9876543210
                </p>

                <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-3xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">
                Personal Information
              </h3>

              <div className="space-y-3">
                <p>
                  <strong>Full Name:</strong> raktim m.
                </p>

                <p>
                  <strong>Email:</strong> rm@gmail.com
                </p>

                <p>
                  <strong>Phone:</strong> +91 9876543210
                </p>

                <p>
                  <strong>Location:</strong> Kolkata, India
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">
                Account Details
              </h3>

              <div className="space-y-3">
                <p>
                  <strong>Role:</strong> Admin
                </p>

                <p>
                  <strong>Member Since:</strong> January 2026
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span className="text-green-500 font-semibold">
                    Active
                  </span>
                </p>

                <p>
                  <strong>Orders Managed:</strong> 34
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;