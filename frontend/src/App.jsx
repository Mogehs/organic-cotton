import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
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
import Blog from "./pages/Blog";
import BlogDetail from "./components/blog/BlogDetail";
import "react-toastify/dist/ReactToastify.css";
import ProductOrders from "./pages/ProductOrders";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import AdminLayout from './components/Dashboard/admin/AdminLayout';
import Products from './components/Dashboard/Products';
import Customers from './components/Dashboard/Customers';
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './components/Dashboard/Orders';
import Courses from './components/Dashboard/Courses';

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
      { path: "/about", element: <About /> },
      { path: "/studios", element: <Studios /> },
      { path: "/newarrivel", element: <NewArrivel /> },
      { path: "/hoodies", element: <Hoodies /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <BlogDetail /> },
      { path: "/jeanes", element: <Jeanes /> },
      { path: "/tshirts", element: <Tshirt /> },
      { path: "/shirts", element: <Shirt /> },
      { path: "/shorts", element: <Shorts /> },
      { path: "/onsales", element: <OnSales /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart/:id", element: <Cart /> },
      { path: "/cartlist", element: <CartList /> },
      { path: "/productorders", element: <ProductOrders /> },
      { path: "/contact", element: <Contact /> },
      { path: "/account", element: <Profile /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },

  // Admin Routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "/dashboard/products", element: <Products /> },
      { path: "/dashboard/customers", element: <Customers /> },
      { path: "/dashboard/orders", element: <Orders /> },
      { path: "/dashboard/courses", element: <Courses /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
