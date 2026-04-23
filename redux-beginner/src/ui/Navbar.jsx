import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", fontSize:"42px",width:"100%",justifyContent:"space-evenly", fontWeight:700 }}>
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/reactLazy" style={{ color: "black", textDecoration: "none" }}>
        Code Split
      </Link>
    </nav>
  );
}

export default Navbar;
