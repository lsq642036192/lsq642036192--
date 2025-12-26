import React from 'react';
import { motion } from 'framer-motion';
import { HONORS_DATA } from '../constants';
import { Award, FileCheck, Star } from 'lucide-react';

const Honors: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-[#fbfbfd] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">荣誉与资质</h1>
          <p className="text-xl text-slate-500 font-light">专业认可，品质见证，不断追求卓越</p>
        </div>

        {/* Awards Section - Gallery Style */}
        <section className="mb-24">
          <div className="flex items-center mb-10">
            <div className="p-3 bg-yellow-50 text-yellow-600 rounded-2xl mr-4">
              <Award size={28} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">获奖荣誉</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HONORS_DATA.map((honor, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={honor.image} alt={honor.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                     <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                       {honor.year}
                     </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">{honor.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{honor.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section - Card Style */}
        <section>
          <div className="flex items-center mb-10">
            <div className="p-3 bg-primary-50 text-primary-600 rounded-2xl mr-4">
              <FileCheck size={28} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">资质认证</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               "电力业务许可证", 
               "ISO 50001 能源管理体系", 
               "高新技术企业认证", 
               "安全生产标准化三级企业"
             ].map((cert, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-all duration-300"
               >
                 <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                   <Star size={28} fill="currentColor" fillOpacity={0.2} />
                 </div>
                 <span className="font-bold text-slate-800 text-lg">{cert}</span>
                 <span className="mt-2 text-xs text-slate-400 font-medium uppercase tracking-wider">Certified</span>
               </motion.div>
             ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Honors;