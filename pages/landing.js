import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProducts, fetchCategories } from "../lib/api";
import Footer from "../components/Footer";

export default function Landing() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchProducts(), fetchCategories()]).then(([prods, cats]) => {
      setProducts(prods);
      setCategories(cats);
      setLoading(false);
    });
  }, []);

  return (
    <>
    
      <main className="max-w-6xl mx-auto p-6">
        <section className="rounded p-8 mb-8 mainDashed">
          <h1 className="text-4xl font-bold mb-3">Welcome to StorePoint</h1>
          <p className="text-slate-700 mb-4">
            StorePoint is a demo storefront showcasing categorized products
            with handy filters and animations. Explore curated items and find
            something you like.
          </p>

          <div className="flex gap-3">
            <Link href="/"><a className="px-4 py-2 bg-cyan-600 text-white rounded">Browse All Products</a></Link>
            <Link href="/"><a className="px-4 py-2 border rounded">See Products</a></Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Categories — featured item</h2>

          {loading ? (
            <p>Loading categories…</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((cat) => {
                const sample = products.find((p) => p.category === cat);
                return (
                  <article key={cat} className="p-4 rounded border border-slate-200">
                    <h3 className="font-bold text-lg">{cat}</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      {`Explore our ${cat} collection — hand-picked items for everyday use.`}
                    </p>

                    {sample ? (
                      <div className="flex items-center gap-4">
                        <img src={sample.image} alt={sample.title} className="w-20 h-20 object-cover rounded" />
                        <div>
                          <div className="font-medium">{sample.title}</div>
                          <div className="text-sm text-slate-600">${sample.price}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-slate-500">No sample product available.</div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <Footer />
      </main>

      <style jsx>{`
        .mainDashed {
          background: linear-gradient(#fff, #fff);
          border: 2px dashed rgba(34, 197, 94, 0.08);
          background-image:
            repeating-linear-gradient(45deg, rgba(34,197,94,0.03) 0 2px, transparent 2px 12px);
        }
      `}</style>
    </>
  );
}