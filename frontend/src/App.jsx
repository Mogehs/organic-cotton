import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import NewArrivel from "./pages/NewArrivel";
import Hoodies from "./pages/Hoodies";
import Jeanes from "./pages/Jeanes";
import Shorts from "./pages/Shorts";
import Shirt from "./pages/Shirt";
import Tshirt from "./pages/Tshirt";
import OnSales from "./pages/OnSales";
import Studios from "./pages/Studios";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import CartList from "./pages/CartList";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./utils/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => (
  <div className="lg:mx-auto lg:max-w-[1536px]">
    <ScrollToTop />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastClassName={() =>
        "rounded-xl shadow-lg bg-[#fdfaf4] text-[#4C3C2A] font-medium px-6 py-4 transition duration-300 ease-in-out"
      }
      bodyClassName="text-sm leading-relaxed"
      progressClassName="bg-[#4C3C2A]"
    />
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/studios", element: <Studios /> },
      { path: "/newarrivel", element: <NewArrivel /> },
      { path: "/hoodies", element: <Hoodies /> },
      { path: "/jeanes", element: <Jeanes /> },
      { path: "/tshirts", element: <Tshirt /> },
      { path: "/shirts", element: <Shirt /> },
      { path: "/shorts", element: <Shorts /> },
      { path: "/onsales", element: <OnSales /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart/:id", element: <Cart /> },
      { path: "/cartlist", element: <CartList /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
