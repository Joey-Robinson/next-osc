import Image from "next/image"
import Link from "next/link"
import { memo } from "react"
import Date from "./blog.date"

const PostPreview = memo(({ tags, title, coverImage, date, slug }) => {
  return (
    <li key={title} className="card">
      <h2 className="card--heading">
        <Link as={`/recipes/${slug}`} href="/recipes/[slug]">
          <a>{title}</a>
        </Link>
      </h2>
      <div className="card--date">
        <Date dateString={date} />
      </div>
      <div className="card--image">
        <Image width={100} height={75} layout="fixed" src={coverImage} />
      </div>
    </li>
  )
})

export default PostPreview
