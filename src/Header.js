import React, { useState } from "react";
import "./Header.css";
import HeadLogo from "./head_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header(prop) {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    prop.setsearch(e.target.value);
  };

  const handleSearch = (e) => {
    if (searchValue) {
      prop.setsearch(e.target.value);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={HeadLogo} />
      </Link>
      <Link to="/location">
        <div class="header__location">
          <span className="header__optionLineOne"> Hello</span>
          <span className="header__optionLineTwo">Select location</span>
        </div>
      </Link>

      <div className="header__search">
        <input
          onChange={handleChange}
          className="header__searchInput"
          type="text"
        ></input>
        <SearchIcon onClick={handleSearch} className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} class="header__option">
            <span className="header__optionLineOne">
              {!user ? "Hello,Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/yourPrime">
          <div class="header__option">
            <span className="header__optionLineOne"> Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/return">
          <div class="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo"> & Orders </span>
          </div>
        </Link>
        <div className="header__optionBasket">
          <Link to="/checkout">
            <AddShoppingCartIcon className="header__optionBasketLineOne" />

            <span className="header__optionBasketLineTwo">
              {" "}
              {basket?.length}{" "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
