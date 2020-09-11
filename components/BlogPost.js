import { HeadPost } from './HeadPost'

export default function BlogPost({ children, meta}) {
  return (
    <div className="blogWrapper">
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </div>
  )
}
