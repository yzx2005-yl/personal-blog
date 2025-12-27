/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // 暂时禁用静态导出以解决路由问题
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 确保静态生成正常工作
  experimental: {
    outputFileTracingRoot: process.cwd()
  }
}

module.exports = nextConfig