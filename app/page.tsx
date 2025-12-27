import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import Date from '@/components/Date'

export default function Home() {
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
          <Link href="/posts">文章</Link>
          <Link href="/contact">联系</Link>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h2>欢迎来到墨不轩的博客</h2>
          <p>这里记录了一名计算机专业学生在前端开发道路上的学习历程、技术探索和心得体会。虽然还是初学者，但我希望通过分享来记录成长的每一步。</p>
        </section>

        <section className="posts-section">
          <h2>最新文章</h2>
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
          <Link href="/posts" className="view-all">查看所有文章 →</Link>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 墨不轩的个人博客. Powered by Next.js</p>
      </footer>
    </div>
  )
}