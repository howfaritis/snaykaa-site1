export default function Footer(){
  return (
    <footer className="section" style={{borderTop:"1px solid var(--border)"}}>
      <div className="container" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
        <p style={{margin:0}}>© {new Date().getFullYear()} SNAYKAA · ABSURDLY SHAMELESS</p>
        <p style={{margin:0}}>
          <a href="https://www.tiktok.com/@snaykaa" target="_blank" rel="noopener">TikTok</a> ·
          <a href="https://www.instagram.com/the_snaykaa/" target="_blank" rel="noopener"> Instagram</a> ·
          <a href="https://www.facebook.com/Snaykaa/" target="_blank" rel="noopener"> Facebook</a> ·
          <a href="https://www.youtube.com/@Snaykaa" target="_blank" rel="noopener"> YouTube</a> ·
          <a href="mailto:naykaabrand@gmail.com"> naykaabrand@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}

