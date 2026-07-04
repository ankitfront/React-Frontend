import React from "react";
import {
  Headphones,
  Watch,
  Briefcase,
  Trash2,
} from "lucide-react";
import QuantityButton from "./QuantityButton";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeItem } = useCart();

  const getIcon = () => {
    switch (item.name) {
      case "Wireless Headphone":
        return <Headphones size={34} className="text-white" />;

      case "Smart Watch":
        return <Watch size={34} className="text-white" />;

      case "Leather Backpack":
        return <Briefcase size={34} className="text-white" />;

      default:
        return <Headphones size={34} className="text-white" />;
    }
  };

  return (
    <div className="grid grid-cols-12 items-center gap-6 py-6 border-b border-gray-100">
      <div className="col-span-5 flex items-center gap-5">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
        >
          {getIcon()}
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#1E2246]">
            {item.name}
          </h3>

          <p className="text-gray-500 text-sm">
            {item.category}
          </p>

          <p className="text-gray-400 font-medium mt-1">
            ₹{item.price}
          </p>
        </div>
      </div>

      <div className="col-span-3 flex justify-center">
        <QuantityButton
          quantity={item.quantity}
          onIncrease={() => increaseQty(item.id)}
          onDecrease={() => decreaseQty(item.id)}
        />
      </div>

      <div className="col-span-2">
        <h3 className="text-xl font-bold text-[#1E2246]">
          ₹{item.price * item.quantity}
        </h3>
      </div>

      <div className="col-span-2 flex justify-end">
        <button
          onClick={() => removeItem(item.id)}
          className="w-11 h-11 rounded-xl border border-red-200 flex items-center justify-center hover:bg-red-50 transition"
        >
          <Trash2
            size={18}
            className="text-red-500"
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;