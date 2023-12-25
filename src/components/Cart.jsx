import React, { useState } from "react";

function Cart({ cartItems, setCartItems }) {
  const [showCart, setShowCart] = useState(false);

  // Calculate total quantity of items in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // Calculate total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0,
  );

  // remove item from the cart based on the productId
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  //  toggle the visibility of the cart
  const toggleCartVisibility = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <div
        className="pl-50 h-30 flex items-start justify-end px-10"
        onClick={toggleCartVisibility}
      >
        <img
          className=" fixed right-5 top-7 m-10 h-10 w-10"
          src="./src/assets/cart.png"
          alt="Cart"
        />
        <span className="fixed right-5 top-5 m-10 text-red-900">
          {totalQuantity}
        </span>
      </div>

      {showCart && (
        <div className=" absolute ">
          <h1 className=" font-semibold text-[5]">PRODUCTS ADDED TO CART</h1>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <img src={item.image} alt={item.name} className="h-20" />
              <p>Quantity: {item.quantity}</p>

              <p>Price: ${item.totalPrice}</p>
              <button
                className="inline-block rounded-full bg-yellow-400 px-3 py-2 font-semibold uppercase tracking-wide
            text-stone-800 transition-colors duration-300 hover:bg-yellow-300  focus:bg-yellow-300 focus:outline-none 
             focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-2 sm:py-2"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <p className="text-8 text-green-600">Total Price: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
