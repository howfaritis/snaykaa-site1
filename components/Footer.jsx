import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="foot-left">
          <p>© {new Date().getFullYear()} <strong>SNAYKAA</strong> · ABSURDLY SHAMELESS</p>
        </div>

        <div className="foot-mid">
          <a className="foot-link" href="mailto:snaykaabrand@gmail.com">snaykaabrand@gmail.com</a>
          <span className="dot">•</span>
          <Link className="foot-link" href="/privacy">Privacy</Link>
          <span className="dot">•</span>
          <Link className="foot-link" href="/terms">Terms</Link>
        </div>

        <div className="foot-right">
          <a className="icon-link" href="https://www.instagram.com/snaykaa" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          <a className="icon-link" href="https://www.tiktok.com/@snaykaa" target="_blank" rel="noopener noreferrer" aria-label="TikTok">TikTok</a>
          <a className="icon-link" href="https://www.facebook.com/snaykaa" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
          <a className="icon-link" href="https://www.youtube.com/@snaykaa" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
          <a className="icon-link" href="https://x.com/the_snaykaa" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">X</a>
          <a className="icon-link" href="https://amazon.com/snaykaa" target="_blank" rel="noopener noreferrer" aria-label="Amazon">Amazon</a>
        </div>
      </div>
    </footer>
  );
}
