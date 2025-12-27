import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import Date from '@/components/Date'

export default function PostsPage() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">
          <Link href="/">墨不轩的个人博客</Link>
        </h1>
        <p className="subtitle">学生计算机爱好者的学习笔记</p>
        <nav className="nav">
          <Link href="/about">关于我</Link>
          <Link href="/posts" className="active">文章</Link>
          <Link href="/contact">联系</Link>
        </nav>
      </header>

      <main className="main">
        <section className="posts-header">
          <h2>所有文章</h2>
          <p>共 {allPostsData.length} 篇文章</p>
        </section>

        <section className="posts-section">
          <ul className="posts-list">
            {allPostsData.map(({ id, date, title, description }) => (
              <li key={id} className="post-item">
                <Link href={`/posts/${id}`} className="post-link">
                  <h3 className="post-title">{title}</h3>
                  <p className="post-description">{description}</p>
                  <small className="post-date">
                    <Date dateString={date} />
                  </small>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="back-home">
          <Link href="/">← 返回首页</Link>
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 墨不轩的个人博客. Powered by Next.js</p>
      </footer>
    </div>
  )
}