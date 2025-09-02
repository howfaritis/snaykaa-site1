import fs from "fs";
import path from "path";
import posts from "../../data/blog.json";
import SeoHead from "../../components/SeoHead";

function mdToHtml(md) {
  // ultra-light markdown -> html
  let html = md
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // headings
  html = html.replace(/^### (.*)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*)$/gm, "<h1>$1</h1>");

  // bold / italic
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // lists
  html = html.replace(/(^|\n)- (.*(?:\n(?!\n|- ).+)*)/g, (m) => {
    const items = m.trim().split("\n").map(l => l.replace(/^- /, "").trim());
    return "<ul>" + items.map(i => `<li>${i}</li>`).join("") + "</ul>";
  });

  // paragraphs
  html = html.replace(/\n{2,}/g, "</p><p>");
  html = `<p>${html}</p>`;
  return html;
}

export default function BlogPost({ post, html }) {
  if (!post) return null;
  return (
    <>
      <SeoHead title={post.title} description={post.excerpt} image={post.image} />
      <article className="container prose">
        <h1>{post.title}</h1>
        <p className="muted">{new Date(post.date).toLocaleDateString()}</p>
        <img src={post.image} alt="" className="post-hero" />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find(p => p.slug === params.slug) || null;
  let html = "";
  if (post?.md) {
    const filePath = path.join(process.cwd(), post.md);
    const md = fs.readFileSync(filePath, "utf8");
    html = mdToHtml(md);
  }
  return { props: { post, html } };
}
