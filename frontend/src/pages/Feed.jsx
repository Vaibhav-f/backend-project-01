import React, { useEffect, useState } from "react";
import axios from 'axios'
const Feed = () => {

  const [posts, setPosts] = useState([])
useEffect(() => {
  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://backend-project-01-qeb2.onrender.com/post");
      setPosts(res.data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  fetchPosts();
}, []);
  

  return (
    <div className="min-h-screen bg-gray-100 py-5">


      <h1 className="text-5xl font-bold flex justify-center items-center">Your Feed</h1>

      {/* Mobile Feed */}
      <div className="w-full max-w-sm mx-auto py-10">

        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white mb-4"
          >

            {/* Post Image */}
            <img
              src={post.image}
              alt="post"
              className="w-full h-100 object-cover  rounded-2xl "
            />

            {/* Caption */}
            <div className="p-3">
              <p className="text-3xl font-semibold text-gray-800">
                {post.caption}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Feed;