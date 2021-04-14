import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import "./HeaderBottom.css";

function HeaderBottom() {
  return (
    <div className="bottom__container">
      <Link to="/">
        {" "}
        <div class="headerBottom__location">
          <span className="headerBottom__optionOne"> 1430,saint Michel</span>
          <span className="header__optionTwo">Quebec,CA</span>
        </div>
      </Link>
      <Link to="/">
        <div class="headerBottom__home">
          <span className="headerBottom__option"> Home</span>
        </div>
      </Link>
      <Link to="/newArrivals">
        <div class="headerBottom__newArrivals">
          <span className="headerBottom__option"> New arrivals</span>
        </div>
      </Link>
      <Link to="/electronics">
        <div class="headerBottom__electronic">
          <span className="headerBottom__option"> Electronics</span>
        </div>
      </Link>
      <Link to="/books">
        <div class="headerBottom__books">
          <span className="headerBottom__option"> Books</span>
        </div>
      </Link>
      <Link to="/trending">
        <div class="headerBottom__Trending">
          <span className="headerBottom__option"> Trending</span>
        </div>
      </Link>
      <Link to="/bestSeller">
        <div class="headerBottom__BestSeller">
          <span className="headerBottom__option"> Best seller</span>
        </div>
      </Link>
    </div>
  );
}

export default HeaderBottom;
