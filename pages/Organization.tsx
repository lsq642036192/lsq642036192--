import React from 'react';
import { motion } from 'framer-motion';
import { DEPARTMENTS } from '../constants';
import { Phone, Mail } from 'lucide-react';

const Organization: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-[#fbfbfd] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">组织架构</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">高效的管理体系，保障企业稳健运行</p>
        </div>

        {/* Tree Chart Visualization - Modernized */}
        <section className="mb-24">
          <div className="flex flex-col items-center">
            {/* Level 1 */}
            <div className="glass-panel bg-white p-6 rounded-2xl shadow-xl border border-slate-100 mb-12 relative z-10 w-72 text-center group hover:-translate-y-1 transition-transform">
               <div className="w-12 h-12 bg-slate-900 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg">GM</div>
               <h3 className="text-lg font-bold text-slate-900">总经理</h3>
               <p className="text-slate-400 text-sm">General Manager</p>
               <div className="absolute top-full left-1/2 w-px h-12 bg-slate-300 -translate-x-1/2"></div>
            </div>

            {/* Level 2 Container */}
            <div className="flex flex-wrap justify-center gap-6 relative pt-12 w-full max-w-6xl before:content-[''] before:absolute before:top-0 before:left-[10%] before:right-[10%] before:h-px before:bg-slate-300 before:hidden md:before:block">
               {/* Vertical Connector Fix */}
               <div className="absolute -top-12 left-1/2 w-px h-12 bg-slate-300 -translate-x-1/2"></div>
               
               {DEPARTMENTS.map((dept, idx) => (
                  <div key={idx} className="flex flex-col items-center relative w-full md:w-auto">
                     <div className="hidden md:block absolute -top-12 left-1/2 w-px h-12 bg-slate-300 -translate-x-1/2"></div>
                     <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100 w-full md:w-48 text-center hover:shadow-md hover:border-primary-200 transition-all cursor-default">
                        <h3 className="font-semibold text-slate-800 text-sm">{dept.name}</h3>
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* Department Details Grid */}
        <div className="mb-10 flex items-center">
           <div className="w-1.5 h-8 bg-primary-500 rounded-full mr-4"></div>
           <h2 className="text-3xl font-bold text-slate-900 tracking-tight">部门职能详情</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <dept.icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{dept.name}</h3>
              </div>
              <p className="text-slate-500 mb-8 min-h-[48px] leading-relaxed">{dept.description}</p>
              
              <div className="space-y-3 pt-6 border-t border-slate-50">
                <div className="flex items-center text-sm text-slate-600">
                  <Phone size={16} className="mr-3 text-slate-400" /> {dept.contact}
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Mail size={16} className="mr-3 text-slate-400" /> {dept.email}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organization;