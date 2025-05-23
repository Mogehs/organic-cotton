import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCreateProductMutation } from "../features/productsApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";

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
        toast.warning("🖼️ You can only upload up to 4 images.");
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
        toast.error("❌ Failed to add product. Please try again.");
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
        className="fixed inset-0 z-50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-[#f4e1c1] text-[#6c4f3d] p-6 rounded-2xl shadow-xl w-[95%] md:w-full max-w-3xl"
          initial={{ scale: 0.85, y: -50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.85, y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 tracking-wide">
            ➕ Add New Product
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
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
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-[#fff4e1] focus:ring-2 focus:ring-primary-color outline-none transition-all duration-150"
                />
              ))}

              <textarea
                name="description"
                value={newProduct.description}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Enter product description"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-[#fff4e1] focus:ring-2 focus:ring-primary-color resize-none outline-none transition-all duration-150"
              />
            </div>

            <div className="flex-1 space-y-3">
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-[#fff4e1] transition-all duration-150"
              />

              {newProduct.images.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2 max-h-40 overflow-y-auto pr-2">
                  {newProduct.images.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index}`}
                      className="h-20 w-20 object-cover rounded-md shadow"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end mt-6 gap-3">
            <button
              onClick={onClose}
              disabled={isSubmitting}
              className="bg-[#d9c0a7] hover:bg-[#b18e64] text-[#6c4f3d] px-4 py-2 rounded transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-[#a8754d] hover:bg-opacity-90 text-white px-5 py-2 rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting && <Loader2 className="animate-spin w-4 h-4" />}
              {isSubmitting ? "Adding..." : "Add Product"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AddProductOverlay;
