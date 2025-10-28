import Link from "next/link";
import { formatPrice } from "../utils/Format";

export default function ProductCard({ product }) {
  return (
    <div className="  backdrop-blur-sm shadow-lg transition-transform duration-300 transform hover:scale-105 rounded-xl p-2 flex flex-col">
      <img src={product.image} alt={product.title} className="h-40 object-contain" />
      <h3 className="text-sm mt-2 line-clamp-2">{product.title}</h3>
      <p className="font-bold">{formatPrice(product.price)}</p>
      <Link href={`/product/${product.id}`} className="text-blue-600 mt-2">View</Link>
    </div>
  );
}