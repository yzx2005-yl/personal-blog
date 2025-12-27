import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '墨不轩的个人博客',
  description: '学生计算机爱好者的学习笔记，记录技术学习和思考',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}