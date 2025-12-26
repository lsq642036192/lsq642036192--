import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, TrendingUp, Users, Leaf, Globe, ChevronRight } from 'lucide-react';
import { STATISTICS, NEWS_DATA } from '../constants';

const Home: React.FC = () => {
  const advantages = [
    { title: "安全为本", desc: "三级安全管理体系，保障生产零事故", icon: Shield, colSpan: "md:col-span-1" },
    { title: "绿色发展", desc: "致力于清洁能源开发，助力双碳目标", icon: Leaf, colSpan: "md:col-span-2" },
    { title: "技术创新", desc: "运用大数据与智能控制，提升能效", icon: Zap, colSpan: "md:col-span-1" },
    { title: "高效运营", desc: "专业化运维团队，最大化资产价值", icon: TrendingUp, colSpan: "md:col-span-1" },
    { title: "专业团队", desc: "汇聚行业精英，打造一流能源企业", icon: Users, colSpan: "md:col-span-1" },
    { title: "社会责任", desc: "服务地方经济，践行央企担当", icon: Globe, colSpan: "md:col-span-2" },
  ];

  return (
    <div className="overflow-hidden bg-[#fbfbfd]">
      {/* Hero Section - Apple Style */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
        {/* Rich Video/Image Background with Blur Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
           {/* Abstract Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/30 blur-[120px] rounded-full animate-pulse" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 pt-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-8">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              引领绿色能源新未来
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
              清洁能源 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-teal-200 to-emerald-400">
                驱动无限可能
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              致力于风电、光伏等新能源技术的研发与应用，为华北地区提供清洁、高效、可持续的能源解决方案。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/about" className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300">
                了解更多
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-8 py-4 text-white hover:text-primary-300 transition-colors text-lg font-medium flex items-center">
                联系我们 <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Statistics - Glass Cards */}
      <section className="relative z-20 -mt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {STATISTICS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-panel backdrop-blur-xl bg-white/80 p-6 md:p-8 rounded-3xl text-center hover:bg-white transition-colors duration-500 group"
              >
                <div className="flex justify-center mb-4">
                   <div className="p-3 rounded-2xl bg-gradient-to-br from-primary-50 to-teal-50 text-primary-600 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon size={28} />
                   </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-slate-500 text-xs md:text-sm font-semibold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Advantages - Bento Grid */}
      <section className="py-24 bg-[#fbfbfd]">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">核心优势</h2>
              <p className="text-slate-500 text-lg max-w-lg">依托华能集团强大背景，结合区域资源优势，打造极具竞争力的新能源企业</p>
            </div>
            <div className="hidden md:block w-24 h-1 bg-gradient-to-r from-primary-500 to-teal-400 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`${adv.colSpan} group bg-white p-8 rounded-[2rem] shadow-[0_2px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-teal-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <adv.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{adv.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Projects - Immersive Cards */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/40 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-900/40 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">重点项目</h2>
            <Link to="/news" className="text-primary-400 hover:text-white transition-colors flex items-center font-medium">
              全部项目 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "天津港零碳港区", img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1470&auto=format&fit=crop", cat: "风电/光伏" },
              { title: "滨海新区风电场", img: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1470&auto=format&fit=crop", cat: "风力发电" },
              { title: "宁河区光伏基地", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1472&auto=format&fit=crop", cat: "太阳能" },
              { title: "静海区储能电站", img: "https://images.unsplash.com/photo-1620247408466-419b78824f46?q=80&w=1631&auto=format&fit=crop", cat: "储能技术" }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="relative h-[420px] rounded-3xl overflow-hidden cursor-pointer group"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-10 h-1 bg-primary-500 mb-4 rounded-full" />
                  <span className="text-primary-300 text-xs font-bold uppercase tracking-widest mb-2 block">{project.cat}</span>
                  <h3 className="text-white text-2xl font-bold leading-tight group-hover:text-primary-200 transition-colors">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Preview - Modern List */}
      <section className="py-24 bg-[#fbfbfd]">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">新闻动态</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-teal-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_DATA.slice(0, 3).map((news, i) => (
              <div key={news.id} className="group bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col h-full">
                <div className="h-56 overflow-hidden relative">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                     <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                       {news.date}
                     </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                     <span className={`text-xs font-bold tracking-wider uppercase ${
                        news.category === 'Company' ? 'text-blue-600' :
                        news.category === 'Industry' ? 'text-green-600' : 'text-orange-600'
                     }`}>
                        {news.category === 'Company' ? '公司新闻' : news.category === 'Industry' ? '行业动态' : '通知公告'}
                     </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-primary-600 transition-colors">
                    <Link to="/news">{news.title}</Link>
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {news.description}
                  </p>
                  <Link to="/news" className="text-primary-600 font-semibold text-sm hover:text-primary-700 inline-flex items-center mt-auto group/link">
                    阅读全文 <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Mesh */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-teal-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/20 blur-[120px] rounded-full animate-pulse" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">携手共创绿色未来</h2>
          <p className="text-primary-100 text-xl max-w-2xl mx-auto mb-12 font-light">
            我们期待与您合作，共同推动清洁能源技术的发展与应用。
          </p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1">
            立即联系
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;