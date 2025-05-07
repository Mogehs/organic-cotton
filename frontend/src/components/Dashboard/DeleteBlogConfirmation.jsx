import React from "react";
import { motion } from "framer-motion";

const DeleteBlogConfirmation = ({ blog, onClose, onDelete }) => {
  if (!blog) return null; // Early return if no blog

  return (
    <motion.div
      className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-96"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-semibold mb-4">Delete Blog</h3>
        <p className="mb-4 text-sm">
          Are you sure you want to delete the blog titled "<strong>{blog.title}</strong>"?
        </p>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => onDelete(blog._id)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DeleteBlogConfirmation;
