import React from "react";

function ProductDetails({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <button
        className="inline-block rounded-full bg-yellow-400 px-3 py-2 font-semibold uppercase tracking-wide
    text-stone-800 transition-colors duration-300 hover:bg-yellow-300  focus:bg-yellow-300 focus:outline-none 
    focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-2 sm:py-2"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
