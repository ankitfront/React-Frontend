import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill all fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    login();
    navigate("/");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative bg-gradient-to-br from-indigo-600 to-purple-500 text-white overflow-hidden flex flex-col justify-between p-14">
        <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-24 -left-20 w-56 h-56 rounded-full bg-white/10"></div>

        <div className="flex items-center gap-4 z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold">
            S
          </div>

          <h2 className="text-3xl font-bold">ShopAdmin</h2>
        </div>

        <div className="z-10">
          <h1 className="text-6xl font-bold leading-tight">
            Welcome back to
            <br />
            ShopAdmin
          </h1>

          <p className="mt-6 text-xl text-white/80 max-w-md">
            Manage your products, cart and orders from one clean, fast dashboard
            built for modern stores.
          </p>

          <div className="flex gap-14 mt-14">
            <div>
              <h3 className="text-4xl font-bold">128+</h3>
              <p className="text-white/70">Products</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">2.4k</h3>
              <p className="text-white/70">Orders</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">4.8★</h3>
              <p className="text-white/70">Rating</p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-50 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          <h1 className="text-5xl font-bold text-gray-900">Sign in</h1>

          <p className="text-gray-500 mt-2 mb-8">
            Enter your credentials to access the dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="you@shopadmin.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full mt-2 border rounded-xl px-4 py-3 outline-none ${
                  error
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-indigo-500"
                }`}
              />

              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-indigo-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3 font-semibold transition"
            >
              Login
            </button>

            <div className="flex items-center gap-3 py-2">
              <hr className="flex-1" />
              <span className="text-gray-400 text-sm">
                or continue with
              </span>
              <hr className="flex-1" />
            </div>


            <p className="text-center text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Create one
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;