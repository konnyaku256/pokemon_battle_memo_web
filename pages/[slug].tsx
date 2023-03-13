import { NextPage, InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"
import ErrorPage from "next/error"
import { getAllPosts, getPostBySlug } from "../library/getMarkdownFile"
import markdownToHtml from "../library/markdownToHtml"
import CustomHead from "../components/head"

type Props = InferGetStaticPropsType<typeof getStaticProps>

/**
 * 記事のパスを取得する
 */
export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

/**
 * 記事の内容を取得する
 */
export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, ["slug", "title", "date", "content"])
  // Markdown を HTML に変換する
  const content = await markdownToHtml(post.content)
  // content を詰め直して返す
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div className="pr-8 pl-8">
      <CustomHead />

      <main className="min-h-screen pt-16 pb-16 flex flex-1 flex-col justify-center items-center">
        <article>
          <h1 className="text-4xl text-center m-8">{post.title}</h1>
          <div className="flex items-center justify-center max-w-3xl">
            <div>
              <p>{post.date}</p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

export default Post
