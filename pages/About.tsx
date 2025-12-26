import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, Clock, ArrowRight } from 'lucide-react';
import { TIMELINE } from '../constants';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'intro' | 'history'>('intro');

  return (
    <div className="pt-32 pb-20 bg-[#fbfbfd] min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">组织介绍</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
          中国华能集团旗下新能源业务平台，致力于清洁能源开发与运营
        </p>
      </div>

      <div className="container mx-auto px-6">
        {/* iOS Style Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-100 p-1.5 rounded-full inline-flex relative">
            <button
              onClick={() => setActiveTab('intro')}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative z-10 ${
                activeTab === 'intro' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              公司简介
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative z-10 ${
                activeTab === 'history' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              发展历程
            </button>
            
            {/* Sliding Background */}
            <div className={`absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
               activeTab === 'intro' ? 'left-1.5 w-[calc(50%-6px)]' : 'left-[calc(50%+3px)] w-[calc(50%-6px)]'
            }`} />
          </div>
        </div>

        {/* Content */}
        {activeTab === 'intro' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 text-primary-600 rounded-2xl mb-8">
                <Building2 size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                关于华能（天津）
              </h2>
              <div className="prose prose-lg text-slate-500 leading-relaxed space-y-6">
                <p>
                  华能（天津）清洁能源有限公司成立于2022年4月28日，注册资本 <span className="text-slate-900 font-semibold">8290.56万元</span> 人民币。公司是中国华能集团有限公司旗下新能源业务平台之一，坐落于天津经济技术开发区泰达MSD-H区双碳大厦。
                </p>
                <p>
                  公司主营风力发电、太阳能发电等清洁能源业务，拥有发电业务、输电业务、供（配）电业务许可资质。我们不仅提供电力，更提供包括工程技术服务、合同能源管理、储能技术服务在内的综合能源解决方案。
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100 mt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Target className="mr-3 text-primary-500" /> 企业文化
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-3 shrink-0"></span>
                     <span><strong className="text-slate-900">使命：</strong> 践行华能"三色公司"使命，提供清洁、高效能源。</span>
                  </li>
                  <li className="flex items-start">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-3 shrink-0"></span>
                     <span><strong className="text-slate-900">愿景：</strong> 成为华北地区清洁能源标杆企业。</span>
                  </li>
                  <li className="flex items-start">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-3 shrink-0"></span>
                     <span><strong className="text-slate-900">价值观：</strong> 安全、绿色、高效、创新。</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-teal-100 rounded-[2.5rem] rotate-3 blur-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Company Building" 
                className="relative rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/5]"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative pl-12 space-y-16 before:content-[''] before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
              {TIMELINE.map((event, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-primary-500 shadow-sm z-10 transition-transform group-hover:scale-125" />
                  <div className="glass-panel bg-white/60 p-8 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-lg">
                    <div className="flex items-center mb-3">
                      <Clock size={16} className="text-primary-500 mr-2" />
                      <span className="text-primary-600 font-bold tracking-wide">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default About;