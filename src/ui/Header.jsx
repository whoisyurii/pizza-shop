import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">J&J Pizza NYC</Link>
      <h1>The best pizza in NYC</h1>
    </header>
  );
}

export default Header;
