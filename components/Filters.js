export default function Filters({ categories, selected, onCategory }) {
  return (
    <div className="p-4 m-4 mt-2 border border-cyan-100 rounded">
      <h3 className="font-bold text-2xl mb-2">Categories</h3>
      {categories.map((cat) => (
        <label key={cat} className="block md:text-xl  ">
          <input
            type="checkbox"
            checked={selected.includes(cat)}
            onChange={() => onCategory(cat)}
          /> {cat}
        </label>
      ))}
    </div>
  );
}
