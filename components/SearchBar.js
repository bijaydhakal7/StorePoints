"use client";
import { useMemo, useEffect } from "react";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";

export default function SearchBar({ value, onChange }) {
  const router = useRouter();

  // Create a debounced function
  const debouncedChange = useMemo(
    () =>
      debounce((searchTerm) => {
        onChange(searchTerm); // update parent state
        router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
      }, 100), // wait 300ms after user stops typing
    [onChange, router]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      debouncedChange.cancel();
    };
  }, [debouncedChange]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => debouncedChange(e.target.value)}
      className="border border-blue-100 w-full md:w-[30vw] pl-5 p-2 rounded-3xl focus:outline-blue-300"
    />
  );
}
