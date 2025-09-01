// components/Header.jsx
import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact", highlight: true },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Logo + Tagline */}
        <Link href="/" className="brand">
          <img src="/logo.png" alt="SNAYKAA" className="brand-mark" />
          <div className="brand-text">
            <span className="brand-name">SNAYKAA</span>
            <span className="brand-tag">ABSURDLY SHAMELESS</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="nav">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.highlight ? "nav-link btn" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

