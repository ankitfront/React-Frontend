import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.agree) {
      alert("Please accept Terms & Privacy Policy.");
      return;
    }
    navigate("/login");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative bg-gradient-to-br from-indigo-600 to-purple-500 text-white overflow-hidden flex flex-col justify-between p-14">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-24 -left-20 w-56 h-56 rounded-full bg-white/10"></div>

        <div className="flex items-center gap-4 z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold">
            S
          </div>

          <h2 className="text-3xl font-bold">ShopAdmin</h2>
        </div>
        <div className="z-10">
          <h1 className="text-6xl font-bold leading-tight">
            Create your ShopAdmin account
          </h1>

          <p className="mt-6 text-xl text-white/80 max-w-md">
            Set up your store in minutes. Add products, track carts and manage
            orders with a delightful, responsive UI.
          </p>

          <div className="flex gap-14 mt-14">
            <div>
              <h3 className="text-4xl font-bold">Free</h3>
              <p className="text-white/70">To start</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">5 min</h3>
              <p className="text-white/70">Setup</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-white/70">Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          <h1 className="text-5xl font-bold text-gray-900">
            Create account
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Fill in your details to get started
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Full name</label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

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
                placeholder="Minimum 6 characters"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="font-medium">Confirm password</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <label className="flex items-center gap-3 text-gray-600">
              <input  type="checkbox"  name="agree"  checked={formData.agree}  onChange={handleChange}
              />
              I agree to the Terms & Privacy Policy
            </label>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3 font-semibold transition cursor-pointer"
            >
              Create Account
            </button>

            <p className="text-center text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;