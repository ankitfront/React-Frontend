import React, { useState } from "react";
import {
  CreditCard,
  Smartphone,
  Banknote,
} from "lucide-react";

const PaymentMethod = () => {
  const [payment, setPayment] = useState("Card");

  const methods = [
    {
      id: "Card",
      title: "Card",
      icon: CreditCard,
    },
    {
      id: "UPI",
      title: "UPI",
      icon: Smartphone,
    },
    {
      id: "COD",
      title: "Cash on Delivery",
      icon: Banknote,
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-[#1E2246] mb-6">
        Payment Method
      </h2>

      <div className="grid grid-cols-3 gap-5">
        {methods.map((method) => {
          const Icon = method.icon;

          return (
            <div
              key={method.id}
              onClick={() => setPayment(method.id)}
              className={`cursor-pointer rounded-2xl border-2 p-5 flex items-center justify-between transition ${
                payment === method.id
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 hover:border-indigo-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={22}
                  className={
                    payment === method.id
                      ? "text-indigo-600"
                      : "text-gray-500"
                  }
                />

                <span className="font-semibold text-[#1E2246]">
                  {method.title}
                </span>
              </div>

              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  payment === method.id
                    ? "border-indigo-600"
                    : "border-gray-300"
                }`}
              >
                {payment === method.id && (
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentMethod;