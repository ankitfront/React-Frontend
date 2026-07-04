import {
  Package,
  ShoppingCart,
  Wallet,
  ClipboardCheck,
} from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Total Products",
    value: "128",
    subtitle: "+12 this week",
    icon: Package,
    color: "text-indigo-600",
  },
  {
    id: 2,
    title: "Cart Items",
    value: "6",
    subtitle: "2 added today",
    icon: ShoppingCart,
    color: "text-indigo-600",
  },
  {
    id: 3,
    title: "Cart Value",
    value: "₹18,240",
    subtitle: "before tax",
    icon: Wallet,
    color: "text-indigo-600",
  },
  {
    id: 4,
    title: "Total Orders",
    value: "34",
    subtitle: "+3 pending",
    icon: ClipboardCheck,
    color: "text-indigo-600",
  },
];

export default stats;