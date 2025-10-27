import "../styles/globals.css";
import { CartProvider } from "../context/CartContext"; // adjust the path
import Navbar from "../components/Navbar";
import { SearchProvider } from "../context/SearchContext";
function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <SearchProvider>
              <div className="bg-sky-300 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] min-h-screen p-2 md:p-5 lg:p-10">
        <div className="all min-h-screen bg-white   rounded-3xl">
         <Navbar />
      <Component {...pageProps} /> 
      </div></div>
      </SearchProvider>
    </CartProvider>
  );
}

export default MyApp;


