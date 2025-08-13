
import data from '../data/products.json'
export default function Shop(){
  const items = data.items;
  return (<>
  <header><div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <div style={{display:'flex',alignItems:'center',gap:12}}><img src="/logo.png" width="44"/><b>SNAYKAA</b></div>
    <nav className="nav"><a href="/">Home</a><a href="/about">About</a><a href="/blog">Blog</a></nav>
  </div></header>
  <main className="container"><h1>Shop</h1>
    <div className="grid grid-2">
      {items.map(p=>(
        <div key={p.slug} className="card">
          <img src={p.media.images[0]} style={{width:'100%',borderRadius:12}}/>
          <h3>{p.name}</h3><p>{p.short}</p>
          <div style={{display:'flex',gap:10}}>
            <a className="btn" href={`/product/${p.slug}`}>View</a>
            <a className="btn" target="_blank" href={p.amazon}>Buy on Amazon</a>
          </div>
        </div>
      ))}
    </div>
  </main>
  <footer><div className="container"><small>© SNAYKAA</small></div></footer>
  </>)
}
