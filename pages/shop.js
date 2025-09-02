import Link from "next/link";
import SeoHead from "../components/SeoHead";
import products from "../data/products.json";

export default function Shop(){
  return (
    <>
      <SeoHead title="Shop" description="SNAYKAA All-In Venom Serum & H₂OSKIN Cream — buy on Amazon." />
      <div className="container">
        <h1>Shop</h1>
        <div className="grid-2">
          {products.map(p=>(
            <article key={p.slug} className="card">
              <img src={p.hero} alt={p.name} className="card-cover" />
              <h2 className="card-title">{p.name}</h2>
              <p className="card-excerpt">{p.short}</p>
              <p style={{display:"flex", gap:"10px", flexWrap:"wrap", margin:"0 1rem 1rem"}}>
                <Link className="btn btn-outline" href={`/product/${p.slug}`}>Learn more</Link>
                <a className="btn btn-primary" href={p.buyUrl} target="_blank" rel="noopener nofollow sponsored">Buy on Amazon</a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

