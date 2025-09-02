import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  // close the mobile menu on route change
  useEffect(() => {
    const handler = () => setOpen(false);
    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", handler);
    }
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="SNAYKAA Home">
          <img src="/logo.png" alt="SNAYKAA logo" className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">SNAYKAA</span>
            <span className="brand-tag">ABSURDLY SHAMELESS</span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/shop">Shop</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/blog">Blog</Link>
          <Link className="nav-link btn" href="/contact">Contact</Link>
        </nav>

        {/* mobile button */}
        <button
          className="menu-button"
          aria-label="Toggle menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen(!open)}
        >
          <span className="menu-icon" />
        </button>
      </div>
    </header>
  );
}

