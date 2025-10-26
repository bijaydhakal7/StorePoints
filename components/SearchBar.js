import { useMemo, useEffect } from "react";
import { debounce } from "lodash";
export default function SearchBar({ value, onChange }) {
    const debouncedChange = useMemo(() => debounce(onChange, 50), [onChange]);
     useEffect(() => {
    return () => {
      debouncedChange.cancel(); 
    };
  }, [debouncedChange]);

  return (
    <input
      className="border border-blue-100 w-full md:w-[30vw] pl-5 p-2 rounded-3xl focus:outline-blue-300 "
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => debouncedChange(e.target.value)}
    />
  );
}
