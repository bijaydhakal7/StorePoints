import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchProduct, fetchProductsByCategory } from "../../lib/api";
import { useCart } from "../../context/CartContext";
import ProductCard from "../../components/ProductCard";
import { formatPrice } from "../../utils/Format";
import { ToastContainer, toast } from 'react-toastify';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const { addToCart } = useCart();
  const notify = () => toast("Product added to Cart!");

  useEffect(() => {
    if (id) {
      fetchProduct(id).then((p) => {
        setProduct(p);
        fetchProductsByCategory(p.category).then((all) => {
          setRelated(all.filter((x) => x.id !== p.id).slice(0, 4));
        });
      });
    }
  }, [id]);

  if (!product) return (
    <div className="flex justify-center items-center h-64">
      <h2> Loading...</h2>    </div>);

  return (
    <div className="p-10">
      <div className=" flex flex-col md:flex-row gap-10 ">
        <img src={product.image} alt={product.title} className="h-64 object-contain" />
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-bold">{product.title}</h1>
          <p>{formatPrice(product.price)}</p>
          <p>{product.description}</p>
          <button
            onClick={() => {
              addToCart(product);
              notify();
            }}
            className="bg-blue-500 w-fit cursor-pointer text-white px-4 py-2 rounded mt-2"
          >
            Add to Cart
          </button>
          <ToastContainer />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4  ">
        <h2 className="font-bold text-3xl mt-6">Related products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {related.map((p) => <ProductCard key={p.id} product={p} />)}
        </div></div>
    </div>
  );
}
