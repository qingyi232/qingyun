'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, ExternalLink, Github, Play, Image as ImageIcon,
  Code2, Database, Server, Palette, CheckCircle, Leaf, X, ZoomIn
} from 'lucide-react'

// 项目详情数据
const projectsData: Record<string, {
  title: string
  desc: string
  fullDesc: string
  tags: string[]
  features: string[]
  techStack: { category: string; items: string[] }[]
  screenshots: string[]
  videoUrl?: string
  codeSnippets: { title: string; language: string; code: string }[]
  githubUrl?: string
  liveUrl?: string
}> = {
  'sonix': {
    title: 'SONIX AI音乐生成平台',
    desc: '商业级SaaS平台',
    fullDesc: '独立开发的AI音乐生成商业平台，用户可通过文字描述生成专业品质的原创音乐。支持多种音乐风格（流行、摇滚、电子、古典等）和付费订阅模式。项目达到商业级可部署标准，具备完整的用户体系、支付闭环和运营后台。',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Prisma', 'Supabase', 'Tailwind CSS'],
    features: [
      'AI音乐生成（支持Suno 3.5/4.0/4.5/5.0多版本模型）',
      '用户积分系统 + 会员订阅体系',
      '在线支付充值（订单创建、回调验签、幂等处理）',
      '音乐广场（发布、点赞、评论、排行榜）',
      '分轨提取（人声/伴奏分离）',
      '歌词同步显示',
      '邀请拉新奖励机制',
      '完整的管理后台（用户管理、订单管理、数据统计）',
      '国际化支持（中英文切换）',
    ],
    techStack: [
      { category: '前端', items: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand'] },
      { category: '后端', items: ['Next.js API Routes', 'Prisma ORM', 'RESTful API'] },
      { category: '数据库', items: ['Supabase (PostgreSQL)', '15+ 数据模型'] },
      { category: '认证支付', items: ['Supabase Auth', 'NextAuth.js', 'ZPay支付集成'] },
    ],
    screenshots: [
      // 把截图放到 public/projects/sonix/ 目录下，命名为 1.png, 2.png 等
      '/projects/sonix/1.png',
      '/projects/sonix/2.png',
      '/projects/sonix/3.png',
    ],
    // 把视频放到 public/projects/sonix/demo.mp4，或填B站链接
    videoUrl: '/projects/sonix/demo.mp4',
    codeSnippets: [
      {
        title: 'Prisma 数据模型设计（用户表）',
        language: 'prisma',
        code: `// 用户表
model User {
  id            String    @id @default(cuid())
  email         String?   @unique
  name          String?
  credits       Int       @default(30)
  role          String    @default("user")
  
  // 会员信息
  membershipType    String    @default("free")
  membershipExpiry  DateTime?
  totalSpent        Float     @default(0)
  
  // 邀请系统
  inviteCode    String?   @unique
  inviteCount   Int       @default(0)
  
  // 关联
  orders        Order[]
  records       GenerationRecord[]
  subscriptions Subscription[]
}`
      },
      {
        title: 'API 路由设计（音乐生成）',
        language: 'typescript',
        code: `// app/api/music/generate/route.ts
export async function POST(request: Request) {
  // 1. 验证用户身份
  const user = await getCurrentUser()
  if (!user) return unauthorized()
  
  // 2. 检查积分余额
  const cost = getModelPrice(params.model)
  if (user.credits < cost) {
    return insufficientCredits()
  }
  
  // 3. 调用 Suno API 生成音乐
  const result = await generateMusic({
    prompt: params.prompt,
    style: params.style,
    model: params.model,
  })
  
  // 4. 扣除积分，记录生成历史
  await prisma.$transaction([
    prisma.user.update({ credits: { decrement: cost } }),
    prisma.generationRecord.create({ ... })
  ])
  
  return NextResponse.json({ taskId: result.taskId })
}`
      },
      {
        title: '支付回调处理（幂等性）',
        language: 'typescript',
        code: `// app/api/pay/notify/route.ts
export async function POST(request: Request) {
  const payload = await request.json()
  
  // 1. 验证签名
  if (!verifyZPaySignature(payload, ZPAY_KEY)) {
    return new Response('签名验证失败', { status: 400 })
  }
  
  // 2. 幂等处理 - 检查订单是否已处理
  const order = await prisma.order.findUnique({
    where: { id: payload.out_trade_no }
  })
  
  if (order?.status === 'paid') {
    return new Response('success') // 已处理，直接返回成功
  }
  
  // 3. 事务处理：更新订单 + 发放积分
  await prisma.$transaction([
    prisma.order.update({ status: 'paid', paidAt: new Date() }),
    prisma.user.update({ credits: { increment: order.credits } })
  ])
  
  return new Response('success')
}`
      },
    ],
    githubUrl: '', // 如果有公开仓库就填
    liveUrl: 'https://sonix.quizmate.top/', // 在线演示
  },
  'smart-park': {
    title: '智慧冰雪园区管理系统',
    desc: '企业级能源与设备管理系统',
    fullDesc: '为冰雪园区开发的企业级管理系统，实现设备实时监控、能耗数据可视化分析、智能预警等功能。',
    tags: ['Spring Boot', 'Vue.js', 'MySQL', 'ECharts'],
    features: ['设备实时监控', '能耗数据分析', '智能预警', '数据可视化大屏'],
    techStack: [
      { category: '前端', items: ['Vue.js', 'Element UI', 'ECharts'] },
      { category: '后端', items: ['Spring Boot', 'MyBatis'] },
      { category: '数据库', items: ['MySQL', 'Redis'] },
    ],
    screenshots: [],
    codeSnippets: [],
  },
  'campus-qa': {
    title: '校园智能问答系统',
    desc: '基于NLP的智能问答引擎',
    fullDesc: '基于NLP的智能问答系统，支持自然语言理解和知识库匹配，为校园用户提供智能问答服务。',
    tags: ['Spring Boot', 'NLP', 'Vue.js', 'MySQL'],
    features: ['智能问答', '知识库管理', '语义理解', '多轮对话'],
    techStack: [
      { category: '前端', items: ['Vue.js', 'Element UI'] },
      { category: '后端', items: ['Spring Boot', 'NLP算法'] },
      { category: '数据库', items: ['MySQL'] },
    ],
    screenshots: [],
    codeSnippets: [],
  },
  'food-delivery': {
    title: '外卖小程序',
    desc: '完整的外卖点餐小程序',
    fullDesc: '完整的外卖点餐小程序，包含商品展示、购物车、订单管理、支付集成等功能。',
    tags: ['微信小程序', 'Spring Boot', 'MySQL'],
    features: ['商品管理', '购物车', '订单系统', '支付集成'],
    techStack: [
      { category: '前端', items: ['微信小程序', 'WXML', 'WXSS'] },
      { category: '后端', items: ['Spring Boot'] },
      { category: '数据库', items: ['MySQL'] },
    ],
    screenshots: [],
    codeSnippets: [],
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectsData[projectId]
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-moss-800 mb-4">项目不存在</h1>
          <Link href="/#projects" className="text-moss-500 hover:underline">
            返回项目列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* 图片查看器弹窗 */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* 提示文字 */}
            <div className="absolute top-4 left-4 text-white/60 text-sm">
              点击任意位置关闭 · 滚动查看长图
            </div>

            {/* 图片容器 - 可滚动 */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[90vh] overflow-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="项目截图"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-moss-50/30 to-sky-50/20">
      {/* 返回导航 */}
      <nav className="sticky top-0 z-50 bg-cream-100/80 backdrop-blur-md border-b border-moss-100">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-moss-600 hover:text-moss-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回项目列表
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* 项目标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-moss-100 text-moss-600 rounded-full text-sm">
              {project.desc}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-moss-800 mb-4">{project.title}</h1>
          <p className="text-lg text-moss-600 leading-relaxed">{project.fullDesc}</p>
          
          {/* 技术标签 */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white text-moss-500 rounded-lg text-sm border border-moss-100">
                {tag}
              </span>
            ))}
          </div>

          {/* 链接按钮 */}
          <div className="flex gap-4 mt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-moss-500 to-leaf-500 text-white rounded-xl hover:shadow-lg transition-shadow"
              >
                <ExternalLink className="w-4 h-4" />
                在线演示
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-moss-700 rounded-xl border border-moss-200 hover:border-moss-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                查看源码
              </a>
            )}
          </div>
        </motion.div>

        {/* 功能特性 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-moss-800 mb-6">
            <CheckCircle className="w-5 h-5 text-moss-500" />
            功能特性
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-moss-100">
                <Leaf className="w-5 h-5 text-moss-400 mt-0.5 flex-shrink-0" />
                <span className="text-moss-700">{feature}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 技术栈 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-moss-800 mb-6">
            <Code2 className="w-5 h-5 text-moss-500" />
            技术栈
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.techStack.map((stack, i) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-moss-100">
                <h3 className="font-semibold text-moss-700 mb-2">{stack.category}</h3>
                <ul className="space-y-1">
                  {stack.items.map((item, j) => (
                    <li key={j} className="text-sm text-moss-600">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 演示视频 */}
        {project.videoUrl && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="flex items-center gap-2 text-xl font-bold text-moss-800 mb-6">
              <Play className="w-5 h-5 text-moss-500" />
              演示视频
            </h2>
            <div className="aspect-video bg-moss-100 rounded-2xl overflow-hidden">
              {project.videoUrl.includes('bilibili') || project.videoUrl.includes('youtube') ? (
                <iframe
                  src={project.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title="项目演示视频"
                />
              ) : (
                <video
                  src={project.videoUrl}
                  className="w-full h-full object-cover"
                  controls
                  poster={project.screenshots[0]}
                >
                  您的浏览器不支持视频播放
                </video>
              )}
            </div>
          </motion.section>
        )}

        {/* 项目截图 */}
        {project.screenshots.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="flex items-center gap-2 text-xl font-bold text-moss-800 mb-6">
              <ImageIcon className="w-5 h-5 text-moss-500" />
              项目截图
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.screenshots.map((screenshotUrl, i) => (
                <div 
                  key={i} 
                  className="rounded-xl overflow-hidden border border-moss-100 bg-white group cursor-pointer"
                  onClick={() => setSelectedImage(screenshotUrl)}
                >
                  <div className="aspect-video bg-moss-50 relative overflow-hidden">
                    <img 
                      src={screenshotUrl} 
                      alt={`截图${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.parentElement!.parentElement!.style.display = 'none'
                      }}
                    />
                    {/* 点击查看提示 */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-white bg-black/50 px-3 py-1.5 rounded-full text-sm">
                        <ZoomIn className="w-4 h-4" />
                        点击查看大图
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 代码片段 */}
        {project.codeSnippets.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="flex items-center gap-2 text-xl font-bold text-moss-800 mb-6">
              <Code2 className="w-5 h-5 text-moss-500" />
              核心代码展示
            </h2>
            <div className="space-y-6">
              {project.codeSnippets.map((snippet, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-moss-100">
                  <div className="bg-moss-700 text-white px-4 py-2 text-sm font-medium">
                    {snippet.title}
                  </div>
                  <pre className="bg-moss-900 text-moss-100 p-4 overflow-x-auto text-sm">
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 底部提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center py-8 border-t border-moss-100"
        >
          <p className="text-moss-500 mb-4">对这个项目感兴趣？</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-moss-500 to-leaf-500 text-white rounded-xl hover:shadow-lg transition-shadow"
          >
            联系我获取更多信息
          </Link>
        </motion.div>
      </div>
    </div>
    </>
  )
}
