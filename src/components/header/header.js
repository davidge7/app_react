
import React, { useState } from "react";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="logo">MyWebsite</div>
      <div
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        tabIndex={0}
        role="button"
      >
        <span />
        <span />
        <span />
      </div>
      <nav className={`nav${menuOpen ? " show" : ""}`}>
        <ul className="nav-links">
          <li><a href="/home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="/features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="/counter" onClick={() => setMenuOpen(false)}>Counter</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
