// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-left">
          © {new Date().getFullYear()} SNAYKAA · <strong>ABSURDLY SHAMELESS</strong>
        </p>

        <p className="footer-right">
          <a href="mailto:snaykaabrand@gmail.com">snaykaabrand@gmail.com</a>
          <span className="dot">•</span>
          <a href="https://www.tiktok.com/@snaykaa" target="_blank" rel="noopener noreferrer">TikTok</a>
          <span className="dot">•</span>
          <a href="https://www.instagram.com/the_snaykaa/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <span className="dot">•</span>
          <a href="https://www.facebook.com/Snaykaa/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <span className="dot">•</span>
          <a href="https://www.youtube.com/@Snaykaa" target="_blank" rel="noopener noreferrer">YouTube</a>
        </p>
      </div>
    </footer>
  );
}
