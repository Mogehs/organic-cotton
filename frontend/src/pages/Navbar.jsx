import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const cartItems = useSelector(state => state.cart.cartItems); 

  
  const totalQty = Array.isArray(cartItems) 
    ? cartItems.reduce((acc, item) => acc + item.quantity, 0) 
    : 0;

  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">


  
      <Link to="/cartlist" className="relative">
        <ShoppingCart className="text-dark-color hover:text-medium-color transition duration-200" size={24} />
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-dark-color text-white text-xs w-5 h-5 flex items-center justify-center rounded-full ">
            {totalQty}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Navbar;
