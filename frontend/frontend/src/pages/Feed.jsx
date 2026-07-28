import React, { useEffect, useState } from "react";
import axios from 'axios'
const Feed = () => {

  const [post, setPost] = useState([])
  useEffect(()=>{
          axios.get("localhost:3000/post")
          setPost(res.data.post)

  },[])
  

  return (
    <div className="min-h-screen bg-gray-100 py-5">

      {/* Mobile Feed */}
      <div className="w-full max-w-sm mx-auto">

        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white mb-4"
          >

            {/* Post Image */}
            <img
              src={post.image}
              alt="post"
              className="w-full h-80 object-cover"
            />

            {/* Caption */}
            <div className="p-3">
              <p className="text-sm text-gray-800">
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