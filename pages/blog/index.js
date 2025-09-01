// pages/blog/index.js
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const blogJsonPath = path.join(process.cwd(), 'data', 'blog', 'blog.json');
  const posts = JSON.parse(fs.readFileSync(blogJsonPath, 'utf8'))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <main className="container" style={{ maxWidth: 1100, margin: '60px auto', padding: '0 16px' }}>
      <h1>Snaykaa Journal</h1>
      <p style={{ color: '#6b6b6b' }}>Stories, routines & formulas for fearless skin.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: 24, marginTop: 24 }}>
        {posts.map(p => (
          <a key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit', border: '1px solid #eee', borderRadius: 12, overflow: 'hidden' }}>
            {p.image && <img src={p.image} alt={p.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />}
            <div style={{ padding: 16 }}>
              <h3 style={{ margin: 0 }}>{p.title}</h3>
              <p style={{ marginTop: 8, color: '#6b6b6b' }}>{p.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}

