import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { formatPrice } from "../utils/Format";
import { useRouter } from "next/router";

export default function CartPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const router = useRouter();

  return (
    <div className="w-full max-w-2xl mx-auto bg-blue-50 rounded-3xl p-6 my-8 shadow-md">
      <div className="head flex justify-between items-center mb-4">
        <h1 className="text-lg sm:text-xl font-bold">Your Cart</h1>
        <button className="font-bold text-2xl flex items-center text-red-500 cursor-pointer" onClick={()=> router.back()}>X</button>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Cart is empty</p>
      ) : (
        <div className="space-y-3">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <p className="text-right font-bold mt-4 text-lg">
            Total: {formatPrice(total)}
          </p>
        </div>
      )}
    </div>
  );
}
