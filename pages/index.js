
export default function Home(){return(<>

<header>
  <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <div style={{display:'flex',alignItems:'center',gap:12}}>
      <img src="/logo.png" alt="SNAYKAA" width="44" height="44"/>
      <b>SNAYKAA</b>
      <span style={{opacity:.7,marginLeft:8}}>ABSURDLY SHAMELESS</span>
    </div>
    <nav className="nav">
      <a href="/shop">Shop</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a className="btn" href="/contact">Contact</a>
    </nav>
  </div>
</header>

<main className="container">
  <section className="grid grid-2">
    <div>
      <h1 style={fontSize:42, lineHeight:1.1}>Luxury skincare for the fearless.</h1>
      <p style={marginTop:12}>Two products. Endless compliments. Meet H₂OSKIN — our all‑in serum and cream designed to hydrate, brighten, and firm.</p>
      <div style={display:'flex',gap:12,marginTop:16}>
        <a className="btn" href="/shop">Shop Now</a>
        <a className="btn" href="https://www.amazon.com/SNAKEEYES" target="_blank">Buy on Amazon</a>
      </div>
    </div>
    <div className="card"><img src="/hero.jpg" alt="SNAYKAA products" style={width:'100%',borderRadius:12}/></div>
  </section>
</main>

<footer>
  <div className="container" style={{display:'flex',justifyContent:'space-between',gap:16,flexWrap:'wrap'}}>
    <small>© 2025 SNAYKAA</small>
    <div className="nav">
      <a href="https://www.tiktok.com/@snaykaa" target="_blank">TikTok</a>
      <a href="https://www.instagram.com/the_snaykaa/" target="_blank">Instagram</a>
      <a href="https://www.facebook.com/Snaykaa/" target="_blank">Facebook</a>
      <a href="https://www.youtube.com/@Snaykaa" target="_blank">YouTube</a>
      <a href="/privacy">Privacy</a>
    </div>
  </div>
</footer>

</>)} 
