import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// SEO优化 - 完整的元数据配置
export const metadata: Metadata = {
  title: '沈松熠 | 全栈开发工程师 - 个人作品集',
  description: '沈松熠，2025届全栈开发工程师，专注于React/Next.js/Spring Boot开发，AI工具高效应用者。50+实战项目经验，擅长Web全栈开发、小程序开发、数据分析可视化。',
  keywords: ['全栈开发', '前端开发', 'React', 'Next.js', 'Spring Boot', 'Vue.js', 'AI编程', '重庆', '求职', '沈松熠'],
  authors: [{ name: '沈松熠' }],
  creator: '沈松熠',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://your-domain.com',
    title: '沈松熠 | 全栈开发工程师',
    description: '2025届全栈开发工程师，50+实战项目经验，AI工具高效应用者',
    siteName: '沈松熠的个人作品集',
  },
  twitter: {
    card: 'summary_large_image',
    title: '沈松熠 | 全栈开发工程师',
    description: '2025届全栈开发工程师，50+实战项目经验',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        {/* 访问统计 - 使用免费的 umami 或 Google Analytics */}
        {/* 部署后替换为你的统计代码 */}
        {process.env.NEXT_PUBLIC_UMAMI_ID && (
          <script
            defer
            src="https://analytics.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
          />
        )}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
