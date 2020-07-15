import React from "react";
import "./style.css";

const SocialLinks = (props) => {
  return (
    <div className="socialMediaIcons">
      <ul>
        <li>
          <a href="https://www.facebook.com/">
            <i className="fa fa-facebook-square" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Mirza_ManUtd">
            <i className="fa fa-twitter-square" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/">
            <i className="fa fa-youtube-play" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Aricati">
            <i className="fa fa-github-square" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-skype" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
