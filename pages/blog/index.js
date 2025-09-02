import posts from "../../data/blog.json";
import Link from "next/link";
import SeoHead from "../../components/SeoHead";

export default function BlogIndex(){
  const sorted = [...posts].sort((a,b)=> new Date(b.date) - new Date(a.date));
  return (
    <>
      <SeoHead title="Blog" description="Guides, routines, and ingredient education from SNAYKAA." />
      <div className="container">
        <h1 className="page-title">Blog</h1>
        <div className="grid-2">
          {sorted.map(p=>(
            <article key={p.slug} className="card">
              <Link className="no-underline" href={`/blog/${p.slug}`}>
                <img src={p.image} alt={p.title} className="card-cover"/>
                <h2 className="card-title">{p.title}</h2>
                <p className="card-excerpt">{p.excerpt}</p>
                <span className="card-more">Read more →</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
