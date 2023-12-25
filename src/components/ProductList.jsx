import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Fetches product data
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/products.json");
        if (!res.ok) {
          throw new Error("Network response was not ok..");
        }

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("There was a problem fetching data", error);
      }
    }

    fetchData();
  }, []);

  //adding product to the cart
  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id,
    );

    if (existingItemIndex !== -1) {
      // If the product already exists in the cart, update its quantity and total price
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      updatedCartItems[existingItemIndex].totalPrice += product.price;
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with quantity and total price
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1, totalPrice: product.price },
      ]);
    }
  };

  // Function to handle click on a product and set it as the selected product
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="flex gap-20 ">
      {products.map((product) => (
        <div key={product.id}>
          <span> {product.name}</span>

          <h2 onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.name} className="h-20" />
            <br />
            <span>price:{product.price}</span>
            <br />
            <span>Description:{product.description}</span>
          </h2>

          {selectedProduct && selectedProduct.id === product.id && (
            <ProductDetails product={selectedProduct} addToCart={addToCart} />
          )}
        </div>
      ))}
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default ProductList;
