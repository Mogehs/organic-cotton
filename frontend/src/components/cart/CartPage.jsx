import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Heart, ShoppingCart } from 'lucide-react';
import { addToCart } from '../../features/cart/cartSlice';
import { FaShippingFast, FaShieldAlt, FaGift, FaUndo } from 'react-icons/fa';

const CartPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.shop.filteredProducts);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [qty, setQty] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const getRandomDescription = () => {
    const descriptions = [
      'This product is designed with attention to detail, ensuring both style and comfort.',
      'Perfect for your daily needs, this product offers unmatched quality and durability.',
      'Made from premium materials, this product is guaranteed to last and impress.'
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  useEffect(() => {
    const foundProduct = products.find(p => p.id.toString() === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.image);

      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id, products]);

  if (!product) return <div className="p-8 text-center">Product not found!</div>;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: qty }));
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
  };

  const productImages = product ? [product, ...relatedProducts] : [];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto text-dark-color">
      {showAlert && (
        <div className="w-full h-[60px] bg-light-color text-dark-color flex items-center justify-between px-6 rounded-md mb-6 shadow transition-all duration-500">
          <span>{qty} × "{product.title}" has been added to your cart.</span>
          <Link to="/cartlist" className="text-dark-color font-semibold hover:underline">VIEW CART</Link>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
        {/* Product Images */}
        <div>
          <div className="border rounded-md p-4 mb-4 bg-white shadow">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 sm:justify-start justify-center">
            {productImages.slice(0, 4).map((item, idx) => (
              <img
                key={idx}
                src={item.image}
                alt={item.title}
                onClick={() => setMainImage(item.image)}
                className="min-w-[60px] sm:min-w-[80px] h-16 sm:h-20 object-contain border rounded-md cursor-pointer hover:scale-105 hover:border-medium-color transition-transform duration-200 shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{getRandomDescription()}</p>
          <p className="text-2xl text-medium-color font-bold mb-4">${product.price}</p>

          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 w-full">
  <button
    onClick={handleAddToCart}
    className="bg-dark-color hover:bg-medium-color text-white py-2 px-6 rounded flex items-center justify-center gap-2 w-full sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] transition-all duration-300"
  >
    <ShoppingCart size={18} /> ADD TO CART
  </button>

  <button className="border p-2 rounded hover:bg-light-color w-full sm:w-12 md:w-16 lg:w-20 h-10 flex items-center justify-center transition-all duration-300">
    <Heart size={20} />
  </button>
</div>

<div className="flex items-center">
  <p>      'This product is designed with attention to detail, ensuring both style and comfort.',
      'Perfect for your daily needs, this product offers unmatched quality and durability.',
      'Made from premium materials, this product is guaranteed to last and impress.'      'This product is designed with attention to detail, ensuring both style and comfort.',
      'Perfect for your daily needs, this product offers unmatched quality and durability.',
      'Made from premium materials, this product is guaranteed to last and impress.'      'This product is designed with attention to detail, ensuring both style and comfort.',
      'Perfect for your daily needs, this product offers unmatched quality and durability.',
      'Made from premium materials, this product is guaranteed to last and impress.'</p>
</div>

          
          <div className="border border-dashed p-4 rounded-md grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-dark-color bg-white shadow-sm mt-10">
            <p className="flex items-center gap-2">
              <FaShippingFast size={22} /> Free shipping on orders from $199
            </p>
            <p className="flex items-center gap-2">
              <FaShieldAlt size={22} /> 100% safe for kids
            </p>
            <p className="flex items-center gap-2">
              <FaGift size={22} /> Membership offers 10%, 15%, 20% off
            </p>
            <p className="flex items-center gap-2">
              <FaUndo size={22} /> Returns within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
