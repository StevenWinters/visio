import { Suspense, lazy, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const NavBar = lazy(() => import("../components/NavBar"));
const Footer = lazy(() => import("../components/Footer"));

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className={`${pathname === "/story" && "dark"}`}>
      <Suspense fallback={<Loader />}>
        <NavBar />
        <Outlet />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
