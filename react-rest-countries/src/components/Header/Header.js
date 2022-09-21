import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Welcome to my react website</h1>
      <nav>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
      </nav>
    </div>
  );
};

export default Header;
