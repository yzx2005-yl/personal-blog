import Link from 'next/link'

export default function ContactPage() {
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
          <Link href="/contact" className="active">联系</Link>
        </nav>
      </header>

      <main className="main">
        <section className="content-section">
          <h2>联系我 - 墨不轩</h2>
          <div className="contact-content">
            <p>如果您对我的文章有任何问题、学习心得交流，或者想讨论技术话题，欢迎通过以下方式联系我：</p>

            <div className="contact-methods">
              <div className="contact-item">
                <h3>📧 邮箱</h3>
                <p><a href="mailto:2232973267@qq.com">2232973267@qq.com</a></p>
              </div>

              <div className="contact-item">
                <h3>🐙 GitHub</h3>
                <p>
                  <a href="https://github.com/yzx2005-yl" target="_blank" rel="noopener noreferrer">
                    github.com/yzx2005-yl
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-note">
              <h3>交流说明</h3>
              <p>作为一名学生，我很欢迎与志同道合的朋友交流学习心得！对于技术问题，我会尽力提供帮助；对于学习讨论，我也很期待与您的交流。请注意，由于还是学生，回复可能不会那么及时，但看到邮件后我会尽快回复的。</p>
            </div>
          </div>
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