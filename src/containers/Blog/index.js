import React, { useState, useEffect } from "react";
import "./style.css";
import blogPostData from "../../data/blog.json";
import { Link } from "react-router-dom";

const Posts = (props) => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const posts = blogPostData.data;
    setPost(posts);
  }, posts);

  return (
    <div className="postCardsContainer">
      {posts.map((post) => {
        return (
          <div className="postCard">
            <Link to={`/blog/${post.id}`}>
              <div className="imgBx">
                <img
                  src={require(`../../pictures/${post.blogImage}`)}
                  alt="post"
                />
              </div>{" "}
            </Link>
            <div class="infoSection">
              <p>{post.blogCategory}</p>
              <Link to={`/post/${post.id}`}>
                <h3>{post.blogTitle}</h3>
              </Link>
              <p>By {post.author}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
