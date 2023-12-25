import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AppLayout from "./ui/AppLayout";
import Cart from "./components/Cart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/productList",
        element: <ProductList />,
      },
      {
        path: "/productDetails",
        element: <ProductDetails />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
