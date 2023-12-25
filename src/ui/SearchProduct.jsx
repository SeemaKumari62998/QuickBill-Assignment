import { useState } from "react";

function SearchProduct() {
  const [query, setQuery] = useState("");

  return (
    <input
      placeholder="Search Products...."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="forcus:ring forcus:ring-yellow-500 forcus:ring-opacity-50 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none sm:w-64  sm:focus:w-72"
    />
  );
}

export default SearchProduct;
