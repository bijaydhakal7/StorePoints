export default function SortDropdown({ value, onChange }) {
  return (
    <select name="Sort" value={value} onChange={(e) => onChange(e.target.value)} className="border p-2 rounded">
      <option value=""   >Sort</option>
      <option value="low">Price: Low → High</option>
      <option value="high">Price: High → Low</option>

    </select>
  );
}
