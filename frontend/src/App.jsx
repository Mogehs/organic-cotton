import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart"; 
import CartList from "./pages/CartList";

const MainLayout = () => (
  <div className="lg:mx-auto lg:max-w-[1536px]">
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
      { path: "/shop", element: <Shop /> },
      { path: "/cart/:id", element: <Cart /> }, 
      
      { path: "/cartlist", element: <CartList /> },
    ],
  },
  { path: "*", element: <div>404 Not Found</div> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
