import React from "react";
//withRouter, helps you to achive the HOC(Hier order component)
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="sbutitle">SHOP NOW</span>
    </div>
  </div>
);

//withRouter() powering up the MenuItem Component
//So, it will return the powered up or lasted modified component.
// In other words, withRouter(), transforming the MenuItem Component into another component


export default withRouter(MenuItem);
