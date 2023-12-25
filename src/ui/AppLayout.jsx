import { Outlet } from "react-router-dom";
import CartOverview from "./CartOverview";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto,1fr,auto]">
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
