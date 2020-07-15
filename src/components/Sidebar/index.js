import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPostData from "../../data/blog.json";
import { NavLink } from "react-router-dom";
import SocialLinks from "../SocialLinks";

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPostData.data;
    setPosts(posts);
  }, posts);

  return (
    <div className="sidebarContainer">
      <Card style={{ marginBottom: "10px" }}>
        <div className="cardHeader">
          <p>About me</p>
        </div>
        <div className="profileImageContainer">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQH8dvn405JkuA/profile-displayphoto-shrink_200_200/0?e=1599696000&v=beta&t=hEbLarf3At4MF7Q8XkJVcCwhQRE8y60cUMbe2QRWh2o"
            alt="img"
          />
        </div>
        <div className="cardBody">
          <p>Hi I am Mirza Arnautovic. I am web dev and I am learning React!</p>
        </div>
      </Card>
      <Card style={{ marginBottom: "10px" }}>
        <div className="cardHeaderSocial">
          <SocialLinks />
        </div>
      </Card>
      <Card style={{ marginBottom: "10px" }}>
        <div className="cardHeader">
          <p>Recent Posts</p>
        </div>
        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink to={`/blog/${post.id}`}>
                <div className="recentPost">
                  <h4>{post.blogTitle}</h4>
                  <p>{post.postedOn}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
