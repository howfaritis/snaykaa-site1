import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-left">© {new Date().getFullYear()} <strong>SNAYKAA</strong> · ABSURDLY SHAMELESS</p>

        <p className="footer-right">
          <a href="mailto:snaykaabrand@gmail.com">snaykaabrand@gmail.com</a>
          <span className="dot">•</span>
          <Link href="/privacy">Privacy</Link>
          <span className="dot">•</span>
          <Link href="/terms">Terms</Link>
          <span className="dot">•</span>
          <a href="https://www.tiktok.com/@snaykaa" target="_blank" rel="noopener">TikTok</a>
          <span className="dot">•</span>
          <a href="https://www.instagram.com/the_snaykaa/" target="_blank" rel="noopener">Instagram</a>
          <span className="dot">•</span>
          <a href="https://www.facebook.com/Snaykaa/" target="_blank" rel="noopener">Facebook</a>
          <span className="dot">•</span>
          <a href="https://www.youtube.com/@Snaykaa" target="_blank" rel="noopener">YouTube</a>
          <span className="dot">•</span>
          <a href="https://x.com/the_snaykaa" target="_blank" rel="noopener">X</a>
          <span className="dot">•</span>
          <a href="https://amazon.com/snaykaa" target="_blank" rel="noopener">Amazon</a>
        </p>
      </div>
    </footer>
  );
}

