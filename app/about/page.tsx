import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">
          <Link href="/">墨不轩的个人博客</Link>
        </h1>
        <p className="subtitle">学生计算机爱好者的学习笔记</p>
        <nav className="nav">
          <Link href="/about" className="active">关于我</Link>
          <Link href="/posts">文章</Link>
          <Link href="/contact">联系</Link>
        </nav>
      </header>

      <main className="main">
        <section className="content-section">
          <h2>关于我 - 墨不轩</h2>
          <div className="about-content">
            <p>您好！欢迎来到墨不轩的个人博客。</p>
            
            <p>我是一名在校学生，同时也是一名计算机爱好者。虽然还是学生，但我对编程技术充满了热情，专注于学习现代 Web 开发技术。这个博客是我记录学习心得、分享技术探索，以及表达对计算机科学思考的地方。</p>

            <h3>当前学习技术栈</h3>
            <ul>
              <li>前端：React, Next.js, TypeScript, HTML/CSS</li>
              <li>开发工具：VS Code, Git</li>
              <li>语言：JavaScript, TypeScript</li>
              <li>学习目标：现代前端框架和全栈开发</li>
            </ul>

            <h3>兴趣爱好</h3>
            <ul>
              <li>💻 编程学习与实践</li>
              <li>📚 计算机科学理论学习</li>
              <li>🔍 技术文档阅读</li>
              <li>🌐 Web 开发项目实践</li>
              <li>📝 技术博客写作</li>
            </ul>

            <h3>个人理念</h3>
            <p>我相信技术的魅力在于不断学习和分享。虽然还是学生，但我致力于通过实践和学习来提升自己的技术能力，希望能够为技术社区贡献自己的力量。</p>

            <p>如果您对我的文章有任何问题或建议，欢迎通过博客的联系方式与我交流。作为一个学习者，我很期待与您的交流和讨论！</p>
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