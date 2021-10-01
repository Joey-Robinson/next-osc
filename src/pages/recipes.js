import fs from "fs"
import matter from "gray-matter"
import Head from "next/head"
import path from "path"
import { sortByDate } from "../../utils"
import Post from "../components/Post"

export default function Blog({ posts }) {
  console.log(posts)
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("recipes"))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "")

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("recipes", filename),
      "utf-8"
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
