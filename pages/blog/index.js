import fs from "fs";
import path from "path";
import Link from "next/link";
import SeoHead from "../../components/SeoHead";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export async function getStaticProps() {
  // read data/blog.json
  const dataDir = path.join(process.cwd(), "data");
  const blogPath = path.join(dataDir, "blog.json");
  const raw = fs.readFileSync(blogPath, "utf8");
  const posts = JSON.parse(raw);

  // newest first by date
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <>
      <SeoHead
        title="Blog"
        description="SNAYKAA™ articles on simplified luxury skincare: routines, ingredients, and results that fit your life."
        keywords={["Snaykaa","blog","luxury skincare","niacinamide","peptides","H2OSKIN"]}
      />
      <Header />

      <main className="container" style={{ padding: "2rem 1rem" }}>
        <h1 className="page-title">Blog</h1>
        <div className="grid-2">
          {posts.map((p) => (
            <article key={p.slug} className="card">
              <Link href={`/blog/${p.slug}`} className="no-underline">
                {/* images live under /public/images/blog */}
                <img
                  src={p.image || "/images/blog/woman.jpg"}
                  alt={p.title}
                  className="card-cover"
                />
                <h2 className="card-title">{p.title}</h2>
                <p className="card-excerpt">{p.excerpt}</p>
                <span className="card-more">Read more →</span>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

