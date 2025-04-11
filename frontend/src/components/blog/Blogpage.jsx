import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByTag, resetFilter } from '../../features/blog/blogSlice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown } from 'lucide-react';


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
    hidden: { opacity: 0, x: -200 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: 'easeOut',
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
    <div className="p-6 max-w-5xl mx-auto">
      
      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => {
            dispatch(resetFilter());
            setCurrentPage(1);
          }}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
            selectedTag === null
              ? 'bg-dark-color text-white shadow'
              : 'hover:bg-black hover:text-white'
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
                ? 'bg-dark-color text-white shadow'
                : 'hover:bg-medium-color hover:text-white'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      
      <div className="space-y-8">
        {currentPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-100 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-sm text-dark-color mt-1">
                {post.date} by {post.author}
              </p>
              <p className="text-dark-color mt-3">
                {post.description.slice(0, 150)}...
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="mt-4 inline-block text-dark-color font-semibold hover:underline"
              >
                Read More →
              </Link>

              
              <div className="mt-4 flex items-center gap-6">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center space-x-2 text-sm font-medium ${
                    reactions[post.id]?.like ? 'text-green-600' : 'text-dark-color'
                  } hover:text-green-700 transition`}
                >
                  <ThumbsUp size={18} strokeWidth={2} className="text-dark-color cursor-pointer" />
                  <span>{reactions[post.id]?.like ? 'Liked' : 'Like'}</span>
                </button>

                <button
                  onClick={() => handleDislike(post.id)}
                  className={`flex items-center space-x-2 text-sm font-medium ${
                    reactions[post.id]?.dislike ? 'text-red-600' : 'text-dark-color'
                  } hover:text-red-700 transition`}
                >
                  <ThumbsDown size={18} strokeWidth={2} className="text-dark-color cursor-pointer"  />


                  <span>{reactions[post.id]?.dislike ? 'Disliked' : 'Dislike'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {filteredPosts.length > postsPerPage && (
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border ${
              currentPage === 1
                ? 'bg-light-color text-gray-400 cursor-not-allowed'
                : 'hover:bg-dark-color hover:text-white'
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border ${
              currentPage === totalPages
                ? 'bg-light-color text-dark-color cursor-not-allowed'
                : 'hover:bg-dark-color hover:text-white'
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
