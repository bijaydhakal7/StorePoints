export default function QuantityControl({ qty, onChange }) {
  return (
    <div className="flex items-center">
      <button onClick={() => onChange(qty - 1)} disabled={qty <= 1} className="px-2 cursor-pointer">-</button>
      <span className="px-2">{qty}</span>
      <button onClick={() => onChange(qty + 1)} className="px-2 cursor-pointer">+</button>
    </div>
  );
}
