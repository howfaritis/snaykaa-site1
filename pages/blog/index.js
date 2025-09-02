import SeoHead from "../../components/SeoHead";
import posts from "../../data/blog.json";
import Link from "next/link";

export default function BlogIndex() {
  return (
    <>
      <SeoHead title="Blog" description="Guides, routines, and ingredient education from SNAYKAA." />
      <div className="container">
        <h1 className="page-title">Blog</h1>
        <div className="grid-2">
          {posts.map(p => (
            <article key={p.slug} className="post-card">
              <img src={p.image} alt="" />
              <h2><Link href={`/blog/${p.slug}`}>{p.title}</Link></h2>
              <p className="muted">{new Date(p.date).toLocaleDateString()}</p>
              <p>{p.excerpt}</p>
              <Link className="btn-link" href={`/blog/${p.slug}`}>Read more →</Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
