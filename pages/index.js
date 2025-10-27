import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../lib/api";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import SortDropdown from "../components/SortDropdown";
import Skeleton from "../components/Skeleton";
import { useSearch } from "../context/SearchContext";
import Footer from "@/components/Footer";
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
    <div className=" gap-1 mt-10  ">
      <Filters categories={categories} selected={selected} onCategory={toggleCategory} />
      <div className="flex-1 m-3 mainBackground p-4 rounded">
        <div className="flex justify-between mb-4">
          <SortDropdown value={sort} onChange={setSort} />
        </div>
        {loading ? (
          <div className="  grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array(8).fill(0).map((_, i) => <Skeleton key={i} />)}
          </div>
        ) : filtered.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className="productAnim"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <style jsx>{`
        .mainBackground {
          background-color: #ffffff;
          /* dashed outline + subtle dashed background pattern */
          border: 2px dashed rgba(31, 41, 55, 0.08); /* slate-800 tint */
          /* repeating diagonal dashed-like pattern */
          background-image:
            repeating-linear-gradient(
              45deg,
              rgba(31,41,55,0.03) 0 2px,
              transparent 2px 10px
            ),
            linear-gradient(#fff, #fff);
          background-size: auto;
        }
        .productAnim {
          opacity: 0;
          transform: translateY(12px) scale(0.995);
          will-change: transform, opacity;
          animation: slideUpFade 420ms cubic-bezier(.2,.8,.2,1) both;
        }
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.995);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        /* small reduce-motion respect */
        @media (prefers-reduced-motion: reduce) {
          .productAnim {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
