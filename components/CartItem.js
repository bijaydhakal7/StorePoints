import QuantityControl from "./QuantityControl";
import { formatPrice } from "../utils/Format";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();
  const total = item.price * item.quantity; 

  return (
    <div className="flex items-center justify-between border-b py-2">
      <img src={item.image} alt={item.title} className="h-16 object-contain" />

      <div className="flex-1 ml-2 items-center">
        <h4>{item.title}</h4>
        <p>{formatPrice(item.price)}</p>
      </div>
<div className="flex md:flex-row flex-col">
      <QuantityControl
        qty={item.quantity}
        onChange={(qty) => updateQuantity(item.id, qty)}
      />

      <p className="ml-4 flex items-center ">{formatPrice(total)}</p>

      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 text-red-600 flex items-center cursor-pointer"
      >
        Remove
      </button></div>
    </div>
  );
}
