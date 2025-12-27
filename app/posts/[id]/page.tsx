import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPostIds, getPostData } from '@/lib/posts'
import Date from '@/components/Date'

export async function generateStaticParams() {
  return getAllPostIds()
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id)
  return {
    title: `${postData.title} - 墨不轩的个人博客`,
    description: postData.description,
  }
}

export default async function Post({ params }: { params: { id: string } }) {
  try {
    const postData = await getPostData(params.id)

    return (
      <div className="container">
        <header className="header">
          <h1 className="title">
            <Link href="/">墨不轩的个人博客</Link>
          </h1>
          <p className="subtitle">学生计算机爱好者的学习笔记</p>
          <nav className="nav">
            <Link href="/about">关于我</Link>
            <Link href="/posts">文章</Link>
            <Link href="/contact">联系</Link>
          </nav>
        </header>

        <main className="main">
          <article className="post">
            <header className="post-header">
              <h1 className="post-title">{postData.title}</h1>
              <div className="post-meta">
                <Date dateString={postData.date} />
              </div>
              <p className="post-description">{postData.description}</p>
            </header>
            
            <div 
              className="post-content"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>

          <div className="post-navigation">
            <Link href="/posts" className="back-link">← 返回文章列表</Link>
          </div>
        </main>

        <footer className="footer">
          <p>© 2024 墨不轩的个人博客. Powered by Next.js</p>
        </footer>
      </div>
    )
  } catch (error) {
    notFound()
  }
}