import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const listPath = path.join(process.cwd(), 'data', 'blog', 'blog.json');
  const posts = JSON.parse(fs.readFileSync(listPath, 'utf8'))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <main className="container" style={{ maxWidth: 860, margin: '40px auto', padding: '0 16px' }}>
      <h1 style={{ fontSize: 36, lineHeight: 1.15 }}>Snaykaa Journal</h1>
      <p style={{ opacity: 0.7, marginTop: 8 }}>Simple, powerful skincare — stories & science.</p>

      <div style={{ display: 'grid', gap: 24, marginTop: 24 }}>
        {posts.map((p) => (
          <a key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, alignItems: 'center' }}>
              {p.image && <img src={p.image} alt="" style={{ width: 160, height: 120, objectFit: 'cover', borderRadius: 12 }} />}
              <div>
                <h3 style={{ margin: '0 0 6px' }}>{p.title}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{p.excerpt}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}


