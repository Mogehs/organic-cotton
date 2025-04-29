import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByTag, resetFilter } from "../../features/blog/blogSlice";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const Blogpage = () => {
  const dispatch = useDispatch();
  const { filteredPosts, selectedTag } = useSelector((state) => state.blog);

  const tags = [
    ...new Set(filteredPosts.reduce((acc, post) => acc.concat(post.tags), [])),
  ];

  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const startIdx = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIdx, startIdx + postsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const [reactions, setReactions] = useState({});

  const handleLike = (postId) => {
    setReactions((prev) => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        like: !prev[postId]?.like,
        dislike: false,
      },
    }));
  };

  const handleDislike = (postId) => {
    setReactions((prev) => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        dislike: !prev[postId]?.dislike,
        like: false,
      },
    }));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto font-poppins">
      {/* Tag Filters */}
      <div className="flex gap-2 mb-8 flex-wrap">
        <button
          onClick={() => {
            dispatch(resetFilter());
            setCurrentPage(1);
          }}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
            selectedTag === null
              ? "bg-black text-white shadow"
              : "hover:bg-black hover:text-white"
          }`}
        >
          All
        </button>
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => {
              dispatch(filterByTag(tag));
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
              selectedTag === tag
                ? "bg-black text-white shadow"
                : "hover:bg-gray-800 hover:text-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedTag}-${currentPage}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {post.date} by {post.author}
                </p>
                <p className="text-gray-700 mt-3">
                  {post.description.slice(0, 150)}...
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>

                {/* Reactions */}
                <div className="mt-4 flex items-center gap-6">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-2 text-sm font-medium ${
                      reactions[post.id]?.like
                        ? "text-green-600"
                        : "text-gray-600"
                    } hover:text-green-700 transition`}
                  >
                    <ThumbsUp size={18} />
                    <span>{reactions[post.id]?.like ? "Liked" : "Like"}</span>
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDislike(post.id)}
                    className={`flex items-center space-x-2 text-sm font-medium ${
                      reactions[post.id]?.dislike
                        ? "text-red-600"
                        : "text-gray-600"
                    } hover:text-red-700 transition`}
                  >
                    <ThumbsDown size={18} />
                    <span>
                      {reactions[post.id]?.dislike ? "Disliked" : "Dislike"}
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      {filteredPosts.length > postsPerPage && (
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border transition-all ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "hover:bg-black hover:text-white"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border transition-all ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "hover:bg-black hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogpage;
