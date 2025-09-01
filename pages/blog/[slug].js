// pages/blog/[slug].js
import fs from 'fs';
import path from 'path';

export async function getStaticPaths() {
  const blogJsonPath = path.join(process.cwd(), 'data', 'blog', 'blog.json');
  const posts = JSON.parse(fs.readFileSync(blogJsonPath, 'utf8'));
  const paths = posts.map(p => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blogDir = path.join(process.cwd(), 'data', 'blog');
  const blogJsonPath = path.join(blogDir, 'blog.json');
  const posts = JSON.parse(fs.readFileSync(blogJsonPath, 'utf8'));
  const post = posts.find(p => p.slug === params.slug);

  // Read the markdown content file with same slug
  const mdPath = path.join(blogDir, `${params.slug}.md`);
  const body = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, 'utf8') : post.body || '';

  return {
    props: {
      post: {
        ...post,
        body,
      },
    },
  };
}

export default function BlogPost({ post }) {
  return (
    <main className="container" style={{ maxWidth: 900, margin: '60px auto', padding: '0 16px' }}>
      <a href="/blog" style={{ textDecoration: 'none', fontSize: 14 }}>&larr; Back to Blog</a>
      <h1 style={{ marginTop: 12 }}>{post.title}</h1>
      <p style={{ color: '#6b6b6b', marginTop: 6 }}>{new Date(post.date).toLocaleDateString()}</p>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          style={{ width: '100%', borderRadius: 12, margin: '20px 0' }}
        />
      )}
      {/* simple markdown: keep headings/paragraphs separated by blank lines in your .md files */}
      <article style={{ lineHeight: 1.7, fontSize: 18, whiteSpace: 'pre-wrap' }}>
        {post.body}
      </article>
    </main>
  );
}

