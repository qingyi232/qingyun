'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Leaf, Code2, Sparkles, ExternalLink, Github, Mail, Phone,
  Download, ChevronDown, Server, Database, Palette, Zap,
  Music, ShoppingCart, Brain, BarChart3, MapPin
} from 'lucide-react'
import { BackToTop } from '@/components/BackToTop'
import { ThemeToggle } from '@/components/ThemeToggle'

// 个人信息配置 - 请修改为你的真实信息
const PROFILE = {
  name: '沈松熠',
  title: '全栈开发工程师',
  subtitle: 'AI工具高效应用者',
  email: 'shenqingyi16@gmail.com',
  phone: '199-9332-6696',
  location: '重庆',
  github: 'https://github.com/qingyi232',
  avatar: '🌿', // 可以换成图片URL
}

// 技能数据
const skills = [
  { name: 'React/Next.js', level: 90, color: 'moss' },
  { name: 'TypeScript', level: 85, color: 'leaf' },
  { name: 'Spring Boot', level: 80, color: 'earth' },
  { name: 'Vue.js', level: 85, color: 'moss' },
  { name: 'Python', level: 75, color: 'sky' },
  { name: 'PostgreSQL/MySQL', level: 80, color: 'earth' },
  { name: 'Tailwind CSS', level: 90, color: 'leaf' },
  { name: 'AI工具应用', level: 95, color: 'sky' },
]

// 项目数据
const projects = [
  {
    id: 'sonix',
    title: 'SONIX AI音乐生成平台',
    desc: '商业级SaaS平台，用户可通过文字描述生成专业品质的原创音乐',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Prisma', 'Supabase', 'Tailwind'],
    icon: Music,
    color: 'moss',
    features: ['AI音乐生成', '用户积分系统', '在线支付', '管理后台'],
    detailUrl: '/projects/sonix', // 项目详情页
    highlight: true,
  },
  {
    id: 'smart-park',
    title: '智慧冰雪园区管理系统',
    desc: '企业级能源与设备管理系统，实现设备实时监控和能耗分析',
    tags: ['Spring Boot', 'Vue.js', 'MySQL', 'ECharts'],
    icon: BarChart3,
    color: 'sky',
    features: ['设备监控', '能耗分析', '智能预警', '数据可视化'],
    detailUrl: '/projects/smart-park',
  },
  {
    id: 'campus-qa',
    title: '校园智能问答系统',
    desc: '基于NLP的智能问答引擎，支持自然语言理解和知识库匹配',
    tags: ['Spring Boot', 'NLP', 'Vue.js', 'MySQL'],
    icon: Brain,
    color: 'leaf',
    features: ['智能问答', '知识库管理', '语义理解'],
    detailUrl: '/projects/campus-qa',
  },
  {
    id: 'food-delivery',
    title: '外卖小程序',
    desc: '完整的外卖点餐小程序，包含商品展示、购物车、订单管理',
    tags: ['微信小程序', 'Spring Boot', 'MySQL'],
    icon: ShoppingCart,
    color: 'earth',
    features: ['商品管理', '购物车', '订单系统', '支付集成'],
    detailUrl: '/projects/food-delivery',
  },
]

// 动画变体
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <div className="relative z-10">
      {/* 装饰性植物元素 */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-moss-200/30 organic-blob blur-2xl" />
      <div className="fixed bottom-20 right-10 w-40 h-40 bg-leaf-200/30 organic-blob blur-2xl" />
      <div className="fixed top-1/2 right-20 w-24 h-24 bg-sky-200/20 organic-blob blur-xl" />

      {/* 导航 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-100/80 backdrop-blur-md border-b border-moss-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Leaf className="w-6 h-6 text-moss-500" />
            <span className="font-semibold text-moss-800">Portfolio</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 md:gap-6"
          >
            {['关于', '技能', '项目', '联系'].map((item, i) => (
              <a 
                key={item}
                href={`#${['about', 'skills', 'projects', 'contact'][i]}`}
                className="text-sm text-moss-700 dark:text-moss-300 hover:text-moss-500 light-hover hidden sm:block"
              >
                {item}
              </a>
            ))}
            <ThemeToggle />
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* 头像/图标 */}
            <motion.div 
              variants={fadeInUp}
              className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-moss-100 to-leaf-100 flex items-center justify-center text-5xl shadow-soft-lg border-4 border-white"
            >
              {PROFILE.avatar}
            </motion.div>

            {/* 标签 */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-moss-50 text-moss-600 rounded-full text-sm border border-moss-100">
                <Sparkles className="w-4 h-4" />
                2025届应届生 · {PROFILE.subtitle}
              </span>
            </motion.div>

            {/* 名字 */}
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-natural mb-4"
            >
              {PROFILE.name}
            </motion.h1>

            {/* 职位 */}
            <motion.p 
              variants={fadeInUp}
              className="text-2xl text-moss-600 mb-6"
            >
              {PROFILE.title}
            </motion.p>

            {/* 简介 */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-moss-700/80 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              半年独立接单经验，累计完成 <span className="text-moss-600 font-semibold">50+</span> 个实战项目。
              熟练运用 AI 编程工具，开发效率提升 <span className="text-moss-600 font-semibold">300%+</span>。
              擅长全栈开发，能独立完成从需求分析到部署上线的完整流程。
            </motion.p>

            {/* 位置 */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 text-moss-600 mb-8">
              <MapPin className="w-4 h-4" />
              <span>{PROFILE.location}</span>
            </motion.div>

            {/* CTA按钮 */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-moss-500 to-leaf-500 text-white rounded-xl shadow-soft light-hover font-medium"
              >
                查看项目
                <ChevronDown className="w-4 h-4" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-moss-700 rounded-xl shadow-soft light-hover font-medium border border-moss-100"
              >
                <Mail className="w-4 h-4" />
                联系我
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-leaf-50 text-leaf-600 rounded-full text-sm mb-4">
                <Code2 className="w-4 h-4" />
                技术栈
              </span>
              <h2 className="text-3xl font-bold text-natural">专业技能</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  className="card-natural rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-moss-800">{skill.name}</span>
                    <span className="text-sm text-moss-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-moss-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full rounded-full ${
                        skill.color === 'moss' ? 'bg-gradient-to-r from-moss-400 to-moss-500' :
                        skill.color === 'leaf' ? 'bg-gradient-to-r from-leaf-400 to-leaf-500' :
                        skill.color === 'earth' ? 'bg-gradient-to-r from-earth-400 to-earth-500' :
                        'bg-gradient-to-r from-sky-400 to-sky-500'
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 技术分类 */}
            <motion.div variants={fadeInUp} className="mt-12 grid md:grid-cols-4 gap-4">
              {[
                { icon: Palette, label: '前端开发', items: 'React, Vue, Next.js, TypeScript' },
                { icon: Server, label: '后端开发', items: 'Spring Boot, Node.js, Python' },
                { icon: Database, label: '数据库', items: 'PostgreSQL, MySQL, Redis' },
                { icon: Zap, label: 'AI工具', items: 'Cursor, Kiro, Copilot, Gemini, Augment' },
              ].map((cat) => (
                <div key={cat.label} className="card-natural rounded-xl p-4 text-center">
                  <cat.icon className="w-8 h-8 mx-auto mb-2 text-moss-500" />
                  <p className="font-medium text-moss-800 mb-1">{cat.label}</p>
                  <p className="text-xs text-moss-600">{cat.items}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 leaf-texture">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-moss-50 text-moss-600 rounded-full text-sm mb-4">
                <Sparkles className="w-4 h-4" />
                精选作品
              </span>
              <h2 className="text-3xl font-bold text-natural">项目展示</h2>
            </motion.div>

            <div className="space-y-8">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  className={`card-natural rounded-3xl p-8 ${project.highlight ? 'ring-2 ring-moss-300' : ''}`}
                >
                  {project.highlight && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-moss-100 text-moss-600 rounded-full text-xs mb-4">
                      <Sparkles className="w-3 h-3" />
                      重点项目
                    </div>
                  )}
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 图标 */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      project.color === 'moss' ? 'bg-moss-100' :
                      project.color === 'leaf' ? 'bg-leaf-100' :
                      project.color === 'earth' ? 'bg-earth-100' :
                      'bg-sky-100'
                    }`}>
                      <project.icon className={`w-8 h-8 ${
                        project.color === 'moss' ? 'text-moss-500' :
                        project.color === 'leaf' ? 'text-leaf-500' :
                        project.color === 'earth' ? 'text-earth-500' :
                        'text-sky-500'
                      }`} />
                    </div>

                    {/* 内容 */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-moss-800 mb-2">{project.title}</h3>
                      <p className="text-moss-600 mb-4">{project.desc}</p>
                      
                      {/* 功能点 */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.map((f) => (
                          <span key={f} className="px-3 py-1 bg-moss-50 text-moss-600 rounded-lg text-sm">
                            {f}
                          </span>
                        ))}
                      </div>

                      {/* 技术标签 */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-white text-moss-500 rounded text-xs border border-moss-100">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* 链接 */}
                      <div className="flex gap-3 items-center">
                        <Link 
                          href={project.detailUrl}
                          className="inline-flex items-center gap-1 text-sm text-moss-600 hover:text-moss-500 light-hover"
                        >
                          <ExternalLink className="w-4 h-4" />
                          查看详情
                        </Link>
                        <Link 
                          href={`${project.detailUrl}#code`}
                          className="inline-flex items-center gap-1 text-sm text-moss-600 hover:text-moss-500 light-hover"
                        >
                          <Github className="w-4 h-4" />
                          代码展示
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-sm mb-4">
                <Mail className="w-4 h-4" />
                联系方式
              </span>
              <h2 className="text-3xl font-bold text-natural mb-4">与我联系</h2>
              <p className="text-moss-600 mb-8">期待与您的合作，欢迎随时联系我</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="card-natural rounded-3xl p-8">
              <div className="space-y-6">
                <a 
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-4 p-4 bg-moss-50 rounded-xl light-hover"
                >
                  <div className="w-12 h-12 bg-moss-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-moss-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-moss-500">邮箱</p>
                    <p className="font-medium text-moss-800">{PROFILE.email}</p>
                  </div>
                </a>

                <a 
                  href={`tel:${PROFILE.phone}`}
                  className="flex items-center gap-4 p-4 bg-leaf-50 dark:bg-leaf-900/30 rounded-xl light-hover"
                >
                  <div className="w-12 h-12 bg-leaf-100 dark:bg-leaf-800/50 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-leaf-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-leaf-500">电话</p>
                    <p className="font-medium text-moss-800 dark:text-moss-200">{PROFILE.phone}</p>
                  </div>
                </a>

                <a 
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-earth-50 dark:bg-earth-900/30 rounded-xl light-hover"
                >
                  <div className="w-12 h-12 bg-earth-100 dark:bg-earth-800/50 rounded-xl flex items-center justify-center">
                    <Github className="w-6 h-6 text-earth-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-earth-500">GitHub</p>
                    <p className="font-medium text-moss-800 dark:text-moss-200">查看我的代码</p>
                  </div>
                </a>
              </div>

              {/* 查看简历 */}
              <div className="mt-8 pt-6 border-t border-moss-100">
                <Link 
                  href="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-moss-500 to-leaf-500 text-white rounded-xl shadow-soft light-hover font-medium"
                >
                  <Download className="w-4 h-4" />
                  下载简历 PDF
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-moss-100 dark:border-moss-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-moss-500 mb-2">
            <Leaf className="w-4 h-4" />
            <span className="text-sm">用心创造，自然生长</span>
          </div>
          <p className="text-xs text-moss-400">
            © 2025 {PROFILE.name}. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>

      {/* 返回顶部按钮 */}
      <BackToTop />
    </div>
  )
}
