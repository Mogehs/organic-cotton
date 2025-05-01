import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
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
import OTP from "./pages/OTP";

import AdminLayout from "./components/Dashboard/admin/AdminLayout";
import Products from "./components/Dashboard/Products";
import Customers from "./components/Dashboard/Customers";
import Dashboard from "./pages/Dashboard/Dashboard";
import Orders from "./components/Dashboard/Orders";
import Courses from "./components/Dashboard/Courses";
import PageWithDelay from "./components/PageWithDelay";
import ProtectedRoute from "./components/ProdtectedRoutes";

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
      {
        path: "/",
        element: (
          <PageWithDelay>
            <Home />
          </PageWithDelay>
        ),
      },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <BlogDetail /> },
      {
        path: "/products",
        element: <Shop />,
      },
      { path: "/cart/:id", element: <Cart /> },
      { path: "/cartlist", element: <CartList /> },
      { path: "/productorders", element: <ProductOrders /> },
      { path: "/contact", element: <Contact /> },
      { path: "/account", element: <Profile /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/otp-verification/:id", element: <OTP /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },

  // Admin Routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/customers",
        element: (
          <ProtectedRoute>
            <Customers />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/orders",
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/courses",
        element: (
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
