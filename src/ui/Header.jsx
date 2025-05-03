import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">J&J Pizza NYC</Link>
      <SearchOrder />
      <p>The best pizza in NYC</p>
    </header>
  );
}

export default Header;
