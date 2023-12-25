import { Link } from "react-router-dom";
import SearchProduct from "../ui/SearchProduct";
function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        &larr;HOME.
      </Link>
      <SearchProduct />
    </header>
  );
}

export default Header;
