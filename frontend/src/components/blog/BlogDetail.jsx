import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import blogPosts from '../../features/blog/Blogs';

const BlogDetail = () => {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const post = blogPosts.find((post) => post.id === postId);

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [reactions, setReactions] = useState({
    [postId]: {
      like: false,
      dislike: false,
      likeCount: post?.likeCount || 1024,
      dislikeCount: post?.dislikeCount || 128,
    },
  });

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | ToyKids Blog`;
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      const newComment = {
        name,
        text: comment,
        date: new Date().toLocaleString(),
        like: false,
        dislike: false,
      };
      setCommentsList((prev) => [...prev, newComment]);
      setName('');
      setComment('');
    } else {
      alert('Please enter both your name and a comment before submitting.');
    }
  };

  const handleLike = () => {
    setReactions((prev) => {
      const wasLiked = prev[postId].like;
      const wasDisliked = prev[postId].dislike;

      return {
        ...prev,
        [postId]: {
          like: !wasLiked,
          dislike: false,
          likeCount: wasLiked ? prev[postId].likeCount - 1 : prev[postId].likeCount + 1,
          dislikeCount: wasDisliked ? prev[postId].dislikeCount - 1 : prev[postId].dislikeCount,
        },
      };
    });
  };

  const handleDislike = () => {
    setReactions((prev) => {
      const wasDisliked = prev[postId].dislike;
      const wasLiked = prev[postId].like;

      return {
        ...prev,
        [postId]: {
          like: false,
          dislike: !wasDisliked,
          likeCount: wasLiked ? prev[postId].likeCount - 1 : prev[postId].likeCount,
          dislikeCount: wasDisliked ? prev[postId].dislikeCount - 1 : prev[postId].dislikeCount + 1,
        },
      };
    });
  };

  const toggleLike = (index) => {
    setCommentsList((prev) =>
      prev.map((cmt, i) =>
        i === index ? { ...cmt, like: !cmt.like, dislike: false } : cmt
      )
    );
  };

  const toggleDislike = (index) => {
    setCommentsList((prev) =>
      prev.map((cmt, i) =>
        i === index ? { ...cmt, dislike: !cmt.dislike, like: false } : cmt
      )
    );
  };

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Blog not found!</h2>
          <Link to="/blog" className="text-orange-500 hover:underline mt-4 block">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-50">
      <div className="max-w-4xl w-full p-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-xl"
        />

        <div className="mt-4 flex items-center gap-6">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 text-sm font-medium ${
              reactions[postId]?.like ? 'text-green-600' : 'text-gray-600'
            } hover:text-green-700 transition`}
          >
            <ThumbsUp size={18} />
            <span>{reactions[postId]?.likeCount} Like</span>
          </button>

          <button
            onClick={handleDislike}
            className={`flex items-center space-x-2 text-sm font-medium ${
              reactions[postId]?.dislike ? 'text-red-600' : 'text-gray-600'
            } hover:text-red-700 transition`}
          >
            <ThumbsDown size={18} />
            <span>{reactions[postId]?.dislikeCount} Dislike</span>
          </button>
        </div>

        <h1 className="text-3xl font-bold mt-4 text-dark-color">{post.title}</h1>
        <p className="text-sm text-dark-color mt-2">
          {post.date} by {post.author} | {post.comments} Comments
        </p>

        <div className="mt-4 text-dark-color">
          <p>{post.description}</p>
        </div>

        <div className="border border-dark-color border-dotted p-4 rounded-lg mb-4 bg-light-color">
          <p className="font-semibold italic text-lg text-dark-color">
            If you’re <span className="font-bold text-dark-color">#toykids</span> include a
            younger-looking, glowing complexion, it all starts with collagen. include a
            younger-looking, glowing complexion, it all starts with collagen. include a
            younger-looking, glowing complexion, it all starts with collagen. include a
            younger-looking, glowing complexion, it all starts with collagen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <img src="/home/3.jpg" alt="Baby 1" className="rounded-xl w-full h-56 object-cover" />
          <img src="/home/3.jpg" alt="Baby 2" className="rounded-xl w-full h-56 object-cover" />
        </div>

        <p className="mt-4 text-dark-color">
          Risus interdum maecenas quisque lobortis dignissim sociis sit lacinia sem laoreet
          vivamus.
        </p>

        <Link
          to="/blog"
          className="mt-6 inline-block text-dark-color hover:underline font-semibold"
        >
          ← Back to Blogs
        </Link>

  
        <div className="mt-12 flex justify-center bg-white">
          <div className="w-full max-w-3xl px-4 py-10">
            <h2 className="text-2xl font-bold mb-4 text-center text-dark-color">Leave A Comment</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-dark-color mb-1">
                  <span className="text-red-500">*</span> Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-dark-color p-3 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-color mb-1">
                  <span className="text-red-500">*</span> Comment
                </label>
                <textarea
                  rows="5"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full border border-dark-color p-3 rounded resize-none"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-dark-color text-white font-semibold px-6 py-2 rounded-full hover:bg-light-color transition"
                >
                  POST COMMENT
                </button>
              </div>
            </form>

          
            {commentsList.length > 0 && (
              <div className="mt-10 space-y-4">
                <h3 className="text-lg font-bold text-dark-color">Recent Comments</h3>
                {commentsList.map((cmt, index) => (
                  <div key={index} className="border rounded p-4 bg-light-color text-dark-color shadow">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold text-sm">{cmt.name}</p>
                      <div className="text-right text-xs">
                        <p>{new Date(cmt.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        <p>{new Date(cmt.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}</p>
                      </div>
                    </div>
                    <p className="text-sm mb-2">{cmt.text}</p>
                    <div className="flex gap-4 mt-1">          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 text-sm font-medium ${
              reactions[postId]?.like ? 'text-green-600' : 'text-gray-600'
            } hover:text-green-700 transition`}
          >
            <ThumbsUp size={18} />
            <span>{reactions[postId]?.likeCount} Like</span>
          </button>

          <button
            onClick={handleDislike}
            className={`flex items-center space-x-2 text-sm font-medium ${
              reactions[postId]?.dislike ? 'text-red-600' : 'text-gray-600'
            } hover:text-red-700 transition`}
          >
            <ThumbsDown size={18} />
            <span>{reactions[postId]?.dislikeCount} Dislike</span>
          </button>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
