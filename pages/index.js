import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../lib/api";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import SortDropdown from "../components/SortDropdown";
import Skeleton from "../components/Skeleton";
import { useSearch } from "../context/SearchContext";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const { search } = useSearch();
  const [sort, setSort] = useState("");

  useEffect(() => {
    Promise.all([fetchProducts(), fetchCategories()]).then(([prods, cats]) => {
      setProducts(prods);
      setCategories(cats);
      setLoading(false);
    });

  }, []);

  const toggleCategory = (cat) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  let filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  if (selected.length) {
    filtered = filtered.filter((p) => selected.includes(p.category));
  }
  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (

    <div className="md:flex gap-1 mt-10">
      <Filters categories={categories} selected={selected} onCategory={toggleCategory} />
      <div className="flex-1 m-3">
        <div className="flex justify-between mb-4">
          <SortDropdown value={sort} onChange={setSort} />
        </div>
        {loading ? (
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array(8).fill(0).map((_, i) => <Skeleton key={i} />)}
          </div>
        ) : filtered.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
