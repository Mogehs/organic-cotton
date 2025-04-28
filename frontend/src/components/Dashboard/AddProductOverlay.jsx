import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCreateProductMutation } from "../features/productsApi";
import { toast } from "react-toastify"; // ✅ Proper toast import
import "react-toastify/dist/ReactToastify.css"; // ✅ Make sure to import CSS

const AddProductOverlay = ({ onClose, onAdd }) => {
  const [createProduct] = useCreateProductMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      const selectedFiles = Array.from(files);

      if (selectedFiles.length + newProduct.images.length > 4) {
        toast.warning("You can only select up to 4 images.");
        return;
      }

      setNewProduct((prev) => ({
        ...prev,
        images: [...prev.images, ...selectedFiles],
      }));
    } else {
      setNewProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    const { name, category, price, stock, description, images } = newProduct;

    if (name && category && description && images.length > 0) {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", parseFloat(price));
      formData.append("stock", parseInt(stock));
      formData.append("description", description);

      images.forEach((image) => {
        formData.append("productImages", image);
      });

      try {
        const response = await createProduct(formData).unwrap();
        toast.success("✅ Product added successfully!");
        onAdd(response);
        onClose();
      } catch (error) {
        console.error("Failed to create product:", error);
        toast.error("❌ Failed to create product. Try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast.warn("⚠️ Please fill in all required fields including images.");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-full max-w-4xl"
          initial={{ scale: 0.8, y: -50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-6 text-dark-color">
            ➕ Add New Product
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Side Form Fields */}
            <div className="flex-1 space-y-4">
              {["name", "category", "price", "stock"].map((field) => (
                <input
                  key={field}
                  type={
                    field === "price" || field === "stock" ? "number" : "text"
                  }
                  name={field}
                  value={newProduct[field]}
                  onChange={handleChange}
                  required
                  placeholder={`Enter ${field}`}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color"
                />
              ))}

              <textarea
                name="description"
                value={newProduct.description}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Enter product description"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color resize-none"
              />
            </div>

            {/* Right Side File Upload + Preview */}
            <div className="flex-1 flex flex-col justify-between">
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />

              <div className="mt-4 flex space-x-2 overflow-x-auto">
                {newProduct.images.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Product image ${index + 1}`}
                    className="h-20 w-20 object-cover rounded-md"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6 space-x-3">
            <button
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 hover:cursor-pointer"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              className={`${
                isSubmitting
                  ? "bg-opacity-60 cursor-not-allowed"
                  : "hover:bg-[#b8754d]"
              } bg-[#a8754d] text-white px-4 py-2 rounded`}
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "Add Product"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AddProductOverlay;
