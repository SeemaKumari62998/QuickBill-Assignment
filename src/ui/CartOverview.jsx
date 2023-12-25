import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-600 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 sm:text-base ">
      <p className="text-stone-300">
        <span>HAPPY SHOPPING</span>
      </p>
      <Link to="/productList"> open ProductList</Link>
    </div>
  );
}

export default CartOverview;
