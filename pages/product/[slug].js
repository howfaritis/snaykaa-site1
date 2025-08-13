
import { useRouter } from 'next/router'
import data from '../../data/products.json'
export default function Product(){
  const { slug } = useRouter().query
  const p = data.items.find(i=>i.slug===slug) || data.items[0];
  return (<>
    <header><div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}><img src="/logo.png" width="44"/><b>SNAYKAA</b></div>
      <nav className="nav"><a href="/">Home</a><a href="/shop">Shop</a></nav>
    </div></header>
    <main className="container">
      <div className="grid grid-2">
        <div className="card"><img src={p.media.images[0]} style={{width:'100%',borderRadius:12}}/></div>
        <div>
          <h1>{p.name}</h1>
          <p>{p.short}</p>
          <div>{p.badges.map(b=>(<span key={b} className="badge">{b}</span>))}</div>
          <a className="btn" target="_blank" href={p.amazon}>Buy on Amazon</a>
          <h3 style={{marginTop:16}}>Ingredients</h3>
          <ul>{p.ingredients.map(i=>(<li key={i}>{i}</li>))}</ul>
          <h3 style={{marginTop:16}}>How to use</h3>
          <ol>{p.howto.map(i=>(<li key={i}>{i}</li>))}</ol>
        </div>
      </div>
    </main>
    <footer><div className="container"><small>© SNAYKAA</small></div></footer>
  </>)
}
