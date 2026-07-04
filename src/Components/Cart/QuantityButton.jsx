import React from "react";
import { Minus, Plus } from "lucide-react";

const QuantityButton = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center border rounded-xl overflow-hidden bg-white">
      <button
        onClick={onDecrease}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
      >
        <Minus size={16} />
      </button>

      <div className="w-12 text-center font-semibold">
        {quantity}
      </div>

      <button
        onClick={onIncrease}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantityButton;