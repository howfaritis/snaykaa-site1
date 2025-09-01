import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export async function getStaticPaths() {
  const listPath = path.join(process.cwd(), 'data', 'blog', 'blog.json');
  const list = JSON.parse(fs.readFileSync(listPath, 'utf8'));
  const paths = list.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const listPath = path.join(process.cwd(), 'data', 'blog', 'blog.json');
  const list = JSON.parse(fs.readFileSync(listPath, 'utf8'));
  const post = list.find((p) => p.slug === params.slug);

  // Read markdown body from the file referenced in blog.json
  const bodyFile = path.join(process.cwd(), post.bodyPath);
  const md = fs.readFileSync(bodyFile, 'utf8');
  const html = marked.parse(md, { mangle: false, headerIds: false });

  return { props: { post: { ...post, html } } };
}

export default function BlogPost({ post }) {
  return (
    <main className="container" style={{ maxWidth: 860, margin: '40px auto', padding: '0 16px' }}>
      <a href="/blog" style={{ display: 'inline-block', marginBottom: 16 }}>← Back to Blog</a>

      <h1 style={{ fontSize: 36, lineHeight: 1.15, margin: '6px 0 12px' }}>{post.title}</h1>
      <p style={{ opacity: 0.7, marginTop: 0 }}>{new Date(post.date).toLocaleDateString()}</p>

      {post.image && (
        <img
          src={post.image}
          alt=""
          style={{ width: '100%', height: 'auto', borderRadius: 12, margin: '12px 0 24px' }}
        />
      )}

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </main>
  );
}



