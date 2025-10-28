"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
const ProductSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="py-4 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          Explore Our <span className="text-indigo-600">Top Products</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className=" rounded-2xl shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 w-full object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {product.title}
                </h3>
                <p className="text-indigo-600 font-bold mt-2">${product.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
<Link href="/products">
        <button  className="mt-10 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
          View All Products
        </button>
</Link>
      </div>
    </section>
  );
};

export default ProductSlider;
