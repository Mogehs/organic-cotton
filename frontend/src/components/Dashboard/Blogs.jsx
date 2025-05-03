import React, { useState } from "react";
import EditBlogOverlay from "./EditBlogOverlay";
import DeleteBlogConfirmation from "./DeleteBlogConfirmation";
import AddBlogOverlay from "./AddBlogOverlay";
import { motion } from "framer-motion";

// Mock Data
const initialBlogs = [
    {
        _id: "1",
        title: "The Power of React",
        category: "Frontend",
        author: "Jane Doe",
        thumbnail: "https://via.placeholder.com/150",
        description: "An overview of React’s strengths and capabilities.",
        body: "React is a JavaScript library for building user interfaces...",
    },
    {
        _id: "2",
        title: "Understanding JavaScript Closures",
        category: "JavaScript",
        author: "John Smith",
        thumbnail: "https://via.placeholder.com/150",
        description: "A deep dive into closures in JavaScript and how they work.",
        body: "Closures are a fundamental concept in JavaScript...",
    },
];

const Blogs = () => {
    const [blogs, setBlogs] = useState(initialBlogs);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const filteredBlogs = blogs.filter(
        (blog) =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEditBlog = (updatedBlog) => {
        setBlogs((prev) =>
            prev.map((blog) => (blog._id === updatedBlog._id ? updatedBlog : blog))
        );
        setIsEditing(false);
    };

    const handleDeleteBlog = (blogId) => {
        setBlogs((prev) => prev.filter((blog) => blog._id !== blogId));
        setIsDeleting(false);
    };

    const handleAddBlog = (newBlog) => {
        setBlogs((prev) => [...prev, { ...newBlog, _id: Date.now().toString() }]);
        setIsAdding(false);
    };

    return (
        <motion.div
            className="bg-white rounded-xl shadow-lg p-6 mt-6 max-w-full overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="flex flex-row max-lg:flex-col justify-between mb-6 gap-3 text-nowrap">
                <h3 className="text-2xl font-semibold text-dark-color tracking-wide">
                    ✍️ Blog Management
                </h3>
                <motion.button
                    onClick={() => setIsAdding(true)}
                    whileHover={{
                        scale: 1.08,
                        backgroundColor: "#ffffff",
                        color: "#a8754d",
                        borderColor: "#a8754d",
                        boxShadow: "0px 0px 12px rgba(168, 117, 77, 0.4)",
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="px-6 py-2 text-sm font-medium cursor-pointer border border-[#a8754d] bg-[#a8754d] text-white rounded-full shadow-md"
                >
                    ➕ Add New Blog
                </motion.button>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary-color transition"
                    placeholder="🔍 Search blogs by title, author or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Blog Table */}
            <div className="w-[85vw] md:w-[55vw] lg:w-[77vw]  rounded-lg border border-gray-200 shadow-md overflow-x-auto">
                <table className=" text-sm text-left table-auto w-full">
                    <thead className="bg-gray-100 text-medium-color text-sm uppercase tracking-wide ">
                        <tr>
                            <th className="p-4 text-nowrap">Thumbnail</th>
                            <th className="p-4 text-nowrap">Title</th>
                            <th className="p-4 text-nowrap">Category</th>
                            <th className="p-4 text-nowrap">Author</th>
                            <th className="p-4 text-nowrap">description</th>
                            <th className="p-4 text-nowrap">Body</th>
                            <th className="p-4 text-center text-nowrap">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBlogs.length > 0 ? (
                            filteredBlogs.map((blog, index) => (
                                <tr
                                    key={blog._id}
                                    className={`transition duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        } hover:bg-gray-100`}
                                >
                                    <td className="px-4 py-2 text-nowrap">
                                        <img
                                            src={blog.thumbnail}
                                            alt={blog.title}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="px-4 py-2 text-nowrap">{blog.title}</td>
                                    <td className="px-4 py-2 text-nowrap">{blog.category}</td>
                                    <td className="px-4 py-2 text-nowrap">{blog.author}</td>
                                    <td className="px-4 py-2 text-nowrap">{blog.description}</td>
                                    <td className="px-4 py-2 text-nowrap">{blog.body}</td>
                                    <td className="flex justify-center items-center px-4 py-2 space-x-3">
                                        <button
                                            onClick={() => {
                                                setSelectedBlog(blog);
                                                setIsEditing(true);
                                            }}
                                            className="px-4 py-2 text-sm rounded-full text-white bg-blue-500 hover:bg-blue-600 transition"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => {
                                                setSelectedBlog(blog);
                                                setIsDeleting(true);
                                            }}
                                            className="px-4 py-2 text-sm rounded-full text-white bg-red-500 hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="text-center py-6 text-gray-400 italic"
                                >
                                    No blogs found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Overlays */}
            {isEditing && selectedBlog && (
                <EditBlogOverlay
                    blog={selectedBlog}
                    onClose={() => setIsEditing(false)}
                    onSave={handleEditBlog}
                />
            )}
            {isDeleting && selectedBlog && (
                <DeleteBlogConfirmation
                    blog={selectedBlog}
                    onClose={() => setIsDeleting(false)}
                    onDelete={() => handleDeleteBlog(selectedBlog._id)}
                />
            )}
            {isAdding && (
                <AddBlogOverlay onClose={() => setIsAdding(false)} onAdd={handleAddBlog} />
            )}
        </motion.div>
    );
};

export default Blogs;
