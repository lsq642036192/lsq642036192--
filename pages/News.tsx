import React, { useState } from 'react';
import { NEWS_DATA } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Company' | 'Industry' | 'Notice'>('All');

  const filteredNews = filter === 'All' 
    ? NEWS_DATA 
    : NEWS_DATA.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-20 bg-[#fbfbfd] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">新闻中心</h1>
          <p className="text-xl text-slate-500 font-light">实时掌握企业动态与行业资讯</p>
        </div>

        {/* Filter - Pill Style */}
        <div className="flex justify-center mb-16 flex-wrap gap-3">
          {['All', 'Company', 'Industry', 'Notice'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105' 
                  : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'All' ? '全部' : cat === 'Company' ? '公司新闻' : cat === 'Industry' ? '行业动态' : '通知公告'}
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="space-y-8 max-w-5xl mx-auto">
          <AnimatePresence mode='wait'>
            {filteredNews.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                layout
                className="bg-white rounded-[2rem] p-4 overflow-hidden shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 flex flex-col md:flex-row group cursor-pointer"
              >
                <div className="md:w-1/3 h-56 md:h-auto rounded-3xl overflow-hidden relative shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                     <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide backdrop-blur-md bg-white/90 ${
                        item.category === 'Company' ? 'text-blue-600' :
                        item.category === 'Industry' ? 'text-green-600' :
                        'text-orange-600'
                      }`}>
                        {item.category === 'Company' ? '公司新闻' : item.category === 'Industry' ? '行业动态' : '通知公告'}
                      </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-slate-400 mb-4 font-medium">
                    <Calendar size={14} className="mr-2" /> {item.date}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed line-clamp-2 mb-6">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    阅读详情 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default News;