import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";

const AddBlogOverlay = ({ onClose, onAdd }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [newBlog, setNewBlog] = useState({
        thumbnail: null, // Thumbnail image
        title: "",
        category: "",
        author: "",
        body: "", // Main content of the blog
        description: "", // Short description
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "thumbnail" && files) {
            setNewBlog((prev) => ({
                ...prev,
                thumbnail: files[0], // Only accept the first image file
            }));
        } else {
            setNewBlog((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = () => {
        const { title, category, author, body, description, thumbnail } = newBlog;

        if (title && category && author && body && description && thumbnail) {
            setIsSubmitting(true);

            setTimeout(() => {
                const fakeBlog = {
                    _id: Date.now().toString(),
                    ...newBlog,
                    thumbnail: URL.createObjectURL(thumbnail), // Convert file to URL
                    createdAt: new Date().toISOString(),
                };

                onAdd(fakeBlog); // Adding the new blog
                toast.success("✅ Blog post added successfully!");
                setIsSubmitting(false);
                onClose(); // Close the overlay
            }, 1000);
        } else {
            toast.warn("⚠️ Please fill in all required fields.");
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
                        📝 Add New Blog Post
                    </h2>

                    <div className="flex flex-col md:flex-row gap-6 mb-4">
                        <div className="flex-1 space-y-4">
                            {/* Title Input */}
                            <input
                                type="text"
                                name="title"
                                value={newBlog.title}
                                onChange={handleChange}
                                required
                                placeholder="Enter title"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-[#fff4e1] focus:ring-2 focus:ring-primary-color outline-none transition-all duration-150"
                            />

                            {/* Category Input */}
                            <input
                                type="text"
                                name="category"
                                value={newBlog.category}
                                onChange={handleChange}
                                required
                                placeholder="Enter category"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-[#fff4e1] focus:ring-2 focus:ring-primary-color outline-none transition-all duration-150"
                            />

                            {/* Author Input */}
                            <input
                                type="text"
                                name="author"
                                value={newBlog.author}
                                onChange={handleChange}
                                required
                                placeholder="Enter author name"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-[#fff4e1] focus:ring-2 focus:ring-primary-color outline-none transition-all duration-150"
                            />

                            {/* Description Input */}
                            <input
                                type="text"
                                name="description"
                                value={newBlog.description}
                                onChange={handleChange}
                                required
                                placeholder="Enter short description"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-[#fff4e1] focus:ring-2 focus:ring-primary-color outline-none transition-all duration-150"
                            />
                        </div>

                        <div className="flex-1 space-y-3">
                            {/* Thumbnail Input */}
                            <input
                                type="file"
                                name="thumbnail"
                                accept="image/*"
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-[#fff4e1] transition-all duration-150"
                            />

                            {/* Display selected thumbnail image */}
                            {newBlog.thumbnail && (
                                <div className="mt-2">
                                    <img
                                        src={URL.createObjectURL(newBlog.thumbnail)}
                                        alt="Thumbnail preview"
                                        className="h-40 w-40 object-cover rounded-md shadow"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Body Input */}
                    <textarea
                        name="body"
                        value={newBlog.body}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Enter blog body"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-[#fff4e1] focus:ring-2 focus:ring-primary-color resize-none outline-none transition-all duration-150"
                    />

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
                            {isSubmitting ? "Adding..." : "Add Blog"}
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AddBlogOverlay;
