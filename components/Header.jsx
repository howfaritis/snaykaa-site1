import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  // close the menu when the route changes (optional safety)
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        {/* Brand */}
        <Link href="/" className="brand" aria-label="Snaykaa Home">
          <img src="/logo.png" alt="" className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">SNAYKAA</span>
            <span className="brand-tag">ABSURDLY SHAMELESS</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-controls="primary-nav"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen(!open)}
        >
          <span className="menu-icon" />
        </button>

        {/* Nav */}
        <nav
          id="primary-nav"
          className={`nav ${open ? "open" : ""}`}
          role="navigation"
          aria-label="Primary"
        >
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/shop" className="nav-link">Shop</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/contact" className="nav-link btn">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

