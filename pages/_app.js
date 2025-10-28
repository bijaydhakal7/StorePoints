import "../styles/globals.css";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { SearchProvider } from "../context/SearchContext";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <SearchProvider>
        <div className="min-h-screen bg-gradient-to-b from-orange-300 via-orange-200 to-transparent">
          <div className=" mx-auto px-6 lg:px-8">
            <Navbar />
            <main className="mt-8 mb-12 bg-white/5 ">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
        </div>
      </SearchProvider>
    </CartProvider>
  );
}

export default MyApp;




