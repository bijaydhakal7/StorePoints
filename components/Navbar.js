import Link from "next/link";
import { useCart } from "../context/CartContext";
import SearchBar from "./SearchBar";
import { useSearch } from "../context/SearchContext";

export default function Navbar() {
  const { cart } = useCart();
  const { search, setSearch } = useSearch();

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between lg:justify-center lg:gap-30  gap-2 p-3 text-blue-950 bg-transparent sticky top-0 z-10   ">
      <div className="flex justify-between lg:justify-center lg:gap-70 items-center w-full md:w-auto">
        <Link href="/" className="font-bold text-xl md:text-2xl">
          StorePoint
        </Link>
        <Link
          href="/cart"
          className="flex items-center font-bold ml-4 md:ml-6"
        >
          <img src="cart.png" className="h-10 w-10" alt="cart" />
          <sup>[{cart.length}]</sup>
        </Link>
      </div>

      <div className="w-full md:w-[30vw] mt-2 md:mt-0">
        <SearchBar value={search} onChange={setSearch} />
      </div>
    </nav>
  );
}
