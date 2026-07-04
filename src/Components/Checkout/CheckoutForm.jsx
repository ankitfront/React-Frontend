import React from "react";
import PaymentMethod from "./PaymentMethod";

const CheckoutForm = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-3xl font-bold text-[#1E2246] mb-8">
        Shipping Information
      </h2>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Address
          </label>

          <textarea
            rows="4"
            placeholder="Enter your address"
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none resize-none focus:border-indigo-500"
          ></textarea>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              City
            </label>

            <input
              type="text"
              placeholder="Kolkata"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              State
            </label>

            <input
              type="text"
              placeholder="West Bengal"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ZIP Code
            </label>

            <input
              type="text"
              placeholder="700001"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Country
            </label>

            <select className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500">
              <option>India</option>
              <option>Bangladesh</option>
              <option>Nepal</option>
              <option>Bhutan</option>
            </select>
          </div>
        </div>
      </form>

      <PaymentMethod />
    </div>
  );
};

export default CheckoutForm;