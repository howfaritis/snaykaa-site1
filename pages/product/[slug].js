import products from "../../data/products.json";
import SeoHead from "../../components/SeoHead";
import Link from "next/link";

export default function Product({ product }) {
  if (!product) return null;
  const img = (product.gallery && product.gallery[0]) || product.hero;
  return (
    <>
      <SeoHead
        title={product.name}
        description={product.short}
        image={img}
        keywords={[product.name, ...product.ingredientsKey]}
      />
      <div className="container product-page">
        <div className="prod-hero">
          <img src={img} alt={product.name} />
          <div className="prod-meta">
            <h1>{product.name}</h1>
            <p className="muted">{product.short}</p>
            <a className="btn btn-primary" href={product.buyUrl} target="_blank" rel="noopener nofollow sponsored">
              Buy on Amazon
            </a>
          </div>
        </div>

        <section className="prose">
          <h2>Key ingredients</h2>
          <ul>{product.ingredientsKey.map(i=> <li key={i}>{i}</li>)}</ul>

          <h2>You’ll like these odds</h2>
          <ul>{product.highlights.map(i=> <li key={i}>{i}</li>)}</ul>

          <h2>Full list of ingredients</h2>
          <p>{product.ingredientsFull}</p>

          <h2>Reviews</h2>
          <p className="muted">Reviews coming soon.</p>

          <h2>Questions</h2>
          <p>Have a question? <a href="mailto:snaykaabrand@gmail.com">Email us</a>.</p>
        </section>

        <p className="muted">More products? <Link href="/shop">Shop Amazon</Link></p>
      </div>
    </>
  );
}

export function getStaticPaths(){
  return { paths: products.map(p=>({ params:{ slug:p.slug } })), fallback:false };
}
export function getStaticProps({ params }){
  const product = products.find(p=>p.slug === params.slug) || null;
  return { props:{ product } };
}

