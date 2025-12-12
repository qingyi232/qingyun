'use client'

import { 
  Mail, Phone, MapPin, Github, Calendar, Award, Briefcase, 
  GraduationCap, Code2, Sparkles, Printer
} from 'lucide-react'

// 个人信息 - 请修改为你的真实信息
const INFO = {
  name: '沈松熠',
  title: '全栈开发工程师',
  phone: '199-9332-6696',
  email: 'shenqingyi16@gmail.com',
  location: '重庆',
  github: 'github.com/qingyi232',
  age: '23岁',
  education: '本科',
  school: '西安工商学院',
  major: '计算机科学与技术',
  graduationYear: '2025届',
}

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      {/* 打印按钮 - 打印时隐藏 */}
      <div className="fixed top-4 right-4 print:hidden z-50">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-moss-500 text-white rounded-lg shadow-lg hover:bg-moss-600 transition-colors"
        >
          <Printer className="w-4 h-4" />
          打印/导出PDF
        </button>
      </div>

      {/* 简历内容 */}
      <div className="min-h-screen bg-cream-50 py-8 px-4 print:py-0 print:px-0 print:bg-white">
        <div className="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none">
          {/* A4纸张大小 */}
          <div className="p-8 print:p-6" style={{ minHeight: '297mm' }}>
            
            {/* 头部 */}
            <header className="border-b-2 border-moss-200 pb-6 mb-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-moss-800 mb-1">{INFO.name}</h1>
                  <p className="text-lg text-moss-600 mb-3">{INFO.title} · {INFO.graduationYear}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-moss-600">
                    <span className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      {INFO.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {INFO.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {INFO.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      {INFO.github}
                    </span>
                  </div>
                </div>
                <div className="text-right text-sm text-moss-500">
                  <p>{INFO.age} · {INFO.education}</p>
                  <p>期望薪资：8-12K</p>
                </div>
              </div>
            </header>

            {/* 个人优势 */}
            <section className="mb-6">
              <h2 className="flex items-center gap-2 text-lg font-bold text-moss-700 mb-3 pb-1 border-b border-moss-100">
                <Award className="w-5 h-5" />
                个人优势
              </h2>
              <ul className="text-sm text-moss-700 space-y-1.5 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-moss-400 mt-1">•</span>
                  <span><strong>项目经验丰富</strong>：半年独立接单经验，累计完成 50+ 个实战项目，涵盖企业级应用、数据分析、小程序等</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-moss-400 mt-1">•</span>
                  <span><strong>全栈开发能力</strong>：熟练掌握前后端开发，能独立完成从需求分析到部署上线的完整开发流程</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-moss-400 mt-1">•</span>
                  <span><strong>AI工具高效应用</strong>：精通 Cursor、Kiro、Copilot、Gemini、Augment 等 AI 编程工具，开发效率提升 300%+</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-moss-400 mt-1">•</span>
                  <span><strong>独立交付能力</strong>：具备与客户沟通、需求分析、项目管理、按时交付的完整商业项目经验</span>
                </li>
              </ul>
            </section>

            {/* 技术栈 */}
            <section className="mb-6">
              <h2 className="flex items-center gap-2 text-lg font-bold text-moss-700 mb-3 pb-1 border-b border-moss-100">
                <Code2 className="w-5 h-5" />
                技术栈
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div>
                  <span className="font-medium text-moss-700">前端开发：</span>
                  <span className="text-moss-600">React 19, Next.js 15, Vue.js, TypeScript, Tailwind CSS</span>
                </div>
                <div>
                  <span className="font-medium text-moss-700">后端开发：</span>
                  <span className="text-moss-600">Spring Boot, Node.js, Python Flask, Prisma</span>
                </div>
                <div>
                  <span className="font-medium text-moss-700">数据库：</span>
                  <span className="text-moss-600">PostgreSQL, MySQL, Redis, Supabase</span>
                </div>
                <div>
                  <span className="font-medium text-moss-700">AI工具：</span>
                  <span className="text-moss-600">Cursor, Kiro, Copilot, Gemini, Augment, Antigravity</span>
                </div>
              </div>
            </section>

            {/* 项目经验 */}
            <section className="mb-6">
              <h2 className="flex items-center gap-2 text-lg font-bold text-moss-700 mb-3 pb-1 border-b border-moss-100">
                <Briefcase className="w-5 h-5" />
                项目经验
              </h2>

              {/* 重点项目 */}
              <div className="mb-4 p-3 bg-moss-50 rounded-lg border border-moss-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-moss-500 text-white text-xs rounded">重点项目</span>
                  <h3 className="font-bold text-moss-800">SONIX AI音乐生成平台</h3>
                  <span className="text-xs text-moss-500">商业级SaaS</span>
                </div>
                <p className="text-sm text-moss-600 mb-2">
                  独立开发的AI音乐生成商业平台，用户可通过文字描述生成专业品质的原创音乐，支持多种音乐风格和付费订阅模式。
                </p>
                <div className="text-xs text-moss-500 mb-2">
                  <strong>技术栈：</strong>Next.js 15 + React 19 + TypeScript + Prisma + Supabase + Tailwind CSS
                </div>
                <div className="text-xs text-moss-600">
                  <strong>核心功能：</strong>AI音乐生成(多版本模型) · 用户积分/会员系统 · 在线支付(签名验证/幂等处理) · 音乐广场(发布/点赞/评论) · 分轨提取 · 完整管理后台 · 邀请拉新奖励机制 · 国际化
                </div>
              </div>

              {/* 其他项目 */}
              <div className="space-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-moss-800 text-sm">智慧冰雪园区能源与设备管理系统</h3>
                    <span className="text-xs text-moss-400">Spring Boot + Vue.js + MySQL + ECharts</span>
                  </div>
                  <p className="text-xs text-moss-600">企业级管理系统，实现设备实时监控、能耗数据可视化分析、智能预警功能</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-moss-800 text-sm">基于SpringBoot的校园智能问答系统</h3>
                    <span className="text-xs text-moss-400">Spring Boot + NLP + Vue.js</span>
                  </div>
                  <p className="text-xs text-moss-600">智能问答引擎，支持自然语言理解，智能匹配答案，知识库构建</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-moss-800 text-sm">城市交通网络数据分析平台</h3>
                    <span className="text-xs text-moss-400">Python + Pandas + Matplotlib + ECharts</span>
                  </div>
                  <p className="text-xs text-moss-600">交通数据采集、清洗、分析及可视化展示，实现交通流量预测、拥堵热点分析</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-moss-800 text-sm">外卖/旅游攻略小程序</h3>
                    <span className="text-xs text-moss-400">微信小程序 + Spring Boot</span>
                  </div>
                  <p className="text-xs text-moss-600">完整的小程序开发，包含商品展示、购物车、订单管理、支付集成等功能</p>
                </div>
              </div>
            </section>

            {/* 教育背景 */}
            <section className="mb-6">
              <h2 className="flex items-center gap-2 text-lg font-bold text-moss-700 mb-3 pb-1 border-b border-moss-100">
                <GraduationCap className="w-5 h-5" />
                教育背景
              </h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-moss-800">{INFO.school}</p>
                  <p className="text-sm text-moss-600">{INFO.major} · 本科</p>
                </div>
                <div className="text-sm text-moss-500 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  2021.09 - 2025.06
                </div>
              </div>
              <p className="text-xs text-moss-500 mt-2">
                主修课程：数据结构、算法设计、数据库原理、计算机网络、操作系统、软件工程
              </p>
            </section>

            {/* 自我评价 */}
            <section>
              <h2 className="flex items-center gap-2 text-lg font-bold text-moss-700 mb-3 pb-1 border-b border-moss-100">
                <Sparkles className="w-5 h-5" />
                自我评价
              </h2>
              <p className="text-sm text-moss-600 leading-relaxed">
                具有丰富实战经验的应届毕业生，在独立接单经历中培养了解决问题、与客户沟通、按时交付的职业素养。
                深刻理解 AI 工具对开发效率的提升作用，善用 AI 工具是现代开发者的核心竞争力。
                期待加入优秀团队，在实际工作中继续成长，为公司创造价值。
              </p>
            </section>

          </div>
        </div>
      </div>

      {/* 打印样式 */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 10mm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </>
  )
}
