import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Layout = () => {
  const { pathname } = useLocation();
  const [isLoading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    window.scrollTo({ top: 0, behavior: "instant" });
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <div className={`${pathname === "/story" && "dark"}`}>
      <NavBar />
      {!isLoading ? (
        <>
          <Outlet />
          <Footer />
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </div>
  );
};

export default Layout;
