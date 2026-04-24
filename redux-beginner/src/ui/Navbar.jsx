import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        fontSize: "22px",
        width: "100%",
        justifyContent: "space-evenly",
        fontWeight: 700,
      }}
    >
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/react-lazy" style={{ color: "black", textDecoration: "none" }}>
        Code Split
      </Link>
      <Link
        to="/debounce-throttle"
        style={{ color: "black", textDecoration: "none" }}
      >
        debounce-throttle
      </Link>
      <Link to="/timer" style={{ color: "black", textDecoration: "none" }}>
        Timer
      </Link>
      <Link to="/counter" style={{ color: "black", textDecoration: "none" }}>
        Counter-redux
      </Link>
    </nav>
  );
}

export default Navbar;
