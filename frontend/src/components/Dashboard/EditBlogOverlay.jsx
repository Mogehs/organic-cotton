import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditBlogOverlay = ({ blog, onClose, onSave }) => {
  const [editedBlog, setEditedBlog] = useState(blog);
  const [previewImage, setPreviewImage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setEditedBlog(blog);
    setPreviewImage(blog.thumbnail || ""); // ✅ Use thumbnail here
  }, [blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setPreviewImage(preview);
      setEditedBlog((prev) => ({
        ...prev,
        thumbnailFile: file, // ✅ Store file for future processing if needed
      }));
    }
  };

  const handleSave = () => {
    if (!editedBlog.title || !editedBlog.description || !editedBlog.body) {
      toast.warn("⚠️ Please fill in all required fields.");
      return;
    }

    setIsSaving(true);

    setTimeout(() => {
      let updatedBlog = { ...editedBlog };

      // ✅ If image file was updated
      if (editedBlog.thumbnailFile) {
        updatedBlog.thumbnail = previewImage; // Use blob preview as placeholder
      }

      onSave(updatedBlog); // Send updated blog to parent
      toast.success("✅ Blog updated successfully!");
      setIsSaving(false);
      onClose();
    }, 1000);
  };

  return (
    <motion.div
      className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-[95%] md:w-[90%] lg:w-[950px] max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">Edit Blog</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={editedBlog.title}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={editedBlog.category}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={editedBlog.author}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={editedBlog.description}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Body</label>
            <textarea
              name="body"
              value={editedBlog.body}
              onChange={handleChange}
              rows="6"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="w-[200px] h-[140px] object-cover mt-4 rounded-md border shadow"
              />
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className={`px-4 py-2 rounded-md text-white ${
              isSaving
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EditBlogOverlay;
