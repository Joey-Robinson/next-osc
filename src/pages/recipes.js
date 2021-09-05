import { getAllPosts } from "../components/blog/blog.api"
import PostPreview from "../components/blog/blog.preview"
import Layout from "../components/layout"

const Recipes = ({ allPosts }) => {
  return (
    <Layout>
      <ul>
        {allPosts.map(({ title, date, slug, coverImage }) => (
          <PostPreview
            key={title}
            date={date}
            title={title}
            slug={slug}
            coverImage={coverImage}
          />
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ])
  const sortByDate = (a, b) => {
    return new Date(b.date) - new Date(a.date)
  }

  return {
    props: { allPosts: allPosts.sort(sortByDate) },
  }
}

export default Recipes
