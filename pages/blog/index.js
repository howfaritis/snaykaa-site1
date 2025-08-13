
import blog from '../../data/blog.json'
export default function Blog(){
  return (<div className="container">
    <h1>Blog</h1>
    {blog.posts.map(p=>(
      <div key={p.slug} className="card" style={{marginBottom:16}}>
        <h3><a href={`/blog/${p.slug}`}>{p.title}</a></h3>
        <p>{p.excerpt}</p>
      </div>
    ))}
  </div>)
}
