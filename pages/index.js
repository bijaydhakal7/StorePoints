import ProductSlider from "@/components/ProductSlider";
import Head from "next/head";
import Link from "next/link"; 
import React from "react";
import { motion } from "framer-motion";
 export default function Home() {
  return (
    <>
     <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-gray-900 mb-4"
      >
    
    <div className="text-black ">
      <Head>
        <title>StorePoint — Modern Commerce</title>
        <meta name="description" content="StorePoint — discover curated products and deals." />
      </Head>

      <section className="flex flex-col items-center text-center py-20">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-950 drop-shadow-lg">
          StorePoint
        </h1>
        <p className="mt-4 max-w-2xl text-lg ">
          A modern storefront focused on delightful product discovery. Browse,
          shop, and save — all in one place.
        </p>


      </section>
    </div> </motion.div>
    <ProductSlider/>
    </>
  );
}