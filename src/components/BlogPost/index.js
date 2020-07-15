import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPostData from "../../data/blog.json";

const BlogPost = (props) => {
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    slug: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });
  const [postId, setPostId] = useState("");

  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPostData.data.find((post) => post.id == postId);
    setPost(post);
    setPostId(postId);
  }, [post, props.match.params.postId]);

  if (post.blogImage == "") return null;

  return (
    <div className="blogPost">
      <Card>
        <div className="blogHeader">
          <p className="blogCategory">{post.blogCategory}</p>
          <h2 className="postTitle">{post.blogTitle}</h2>
          <p className="postedBy">
            Posted on {post.postedOn} by {post.author}
          </p>
        </div>
        <div className="postImageContainer">
          <img alt="post" src={require(`../../pictures/${post.blogImage}`)} />
        </div>
        <div className="postText">
          <p>{post.blogText}</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
