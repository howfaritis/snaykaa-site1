
import { useRouter } from 'next/router'
import blog from '../../data/blog.json'
export default function Post(){
  const { slug } = useRouter().query
  const p = blog.posts.find(x=>x.slug===slug) || blog.posts[0]
  return (<div className="container"><a href="/blog">← Back</a><h1>{p.title}</h1><p>{p.body}</p></div>)
}
