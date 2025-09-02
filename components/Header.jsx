import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    if (typeof window !== "undefined") window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
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

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-controls="primary-nav"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen(!open)}
        >
          <span className="menu-icon" />
        </button>

        <nav id="primary-nav" className={`nav ${open ? "open" : ""}`} aria-label="Primary">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/shop">Shop</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/blog">Blog</Link>
          <Link className="nav-link btn" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}


