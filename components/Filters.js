export default function Filters({ categories, selected, onCategory }) {
  const clearAll = () => {
    // toggle off every selected category by calling onCategory for each (onCategory toggles)
    selected.forEach((cat) => onCategory(cat));
  };

  return (
    <div className="p-1 m-2 mt-2 border border-cyan-100 rounded">
      <div className="flex items-center justify-between mb-2">
        {selected.length > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="text-sm text-cyan-600 hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      <div className="flex flex-wrap justify-around gap-5">
        {categories.map((cat) => {
          const active = selected.includes(cat);
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onCategory(cat)}
              aria-pressed={active}
              className={
                "px-15 py-2 rounded-4xl border transition-colors text-md " +
                (active
                  ? "bg-cyan-600 text-white border-cyan-600 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50")
              }
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
