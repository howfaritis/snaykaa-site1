import { useRouter } from 'next/router'
import blog from '../../data/blog.json'
import { marked } from 'marked'

export default function Post(){
  const { slug } = useRouter().query
  const p = blog.posts.find(x=>x.slug===slug) || blog.posts[0]

  // Convert Markdown (###, **bold**, - lists, etc.) to HTML
  const html = marked.parse(p.body || '')

  return (
    <div className="container">
      <a href="/blog">← Back</a>
      <h1 style={{ marginTop: 12, marginBottom: 12 }}>{p.title}</h1>
      <div
        className="prose"
        style={{ lineHeight: 1.7 }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

