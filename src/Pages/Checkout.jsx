import React from "react";
import CheckoutSidebar from "../Components/Checkout/CheckoutSidebar";
import CheckoutNavbar from "../Components/Checkout/CheckoutNavbar";
import CheckoutForm from "../Components/Checkout/CheckoutForm";
import CheckoutSummary from "../Components/Checkout/CheckoutSummary";

const Checkout = () => {
  return (
    <div className="flex min-h-screen bg-[#F6F7FC]">
      <CheckoutSidebar />

      <div className="flex-1 flex flex-col">
        <CheckoutNavbar />

        <div className="flex-1 overflow-y-auto p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1E2246]">
              Checkout
            </h1>

            <p className="text-gray-500 mt-2">
              Complete your purchase by providing your shipping details and payment method.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
              <CheckoutForm />
            </div>

            <div>
              <CheckoutSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;