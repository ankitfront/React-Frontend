import {
  Package,
  CheckSquare,
  Truck,
  XCircle,
} from "lucide-react";

const orderStats = [
  {
    id: 1,
    title: "Total Orders",
    value: "34",
    icon: Package,
    color: "text-indigo-600",
  },
  {
    id: 2,
    title: "Delivered",
    value: "28",
    icon: CheckSquare,
    color: "text-green-500",
  },
  {
    id: 3,
    title: "Processing",
    value: "4",
    icon: Truck,
    color: "text-orange-500",
  },
  {
    id: 4,
    title: "Cancelled",
    value: "2",
    icon: XCircle,
    color: "text-red-500",
  },
];

export default orderStats;