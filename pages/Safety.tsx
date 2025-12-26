import React from 'react';
import { AlertTriangle, ShieldCheck, LifeBuoy, CheckCircle } from 'lucide-react';

const Safety: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-[#fbfbfd] min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Modern Alert Banner */}
        <div className="bg-red-50/50 backdrop-blur-sm border border-red-100 p-8 rounded-3xl mb-16 flex flex-col md:flex-row items-start md:items-center shadow-sm">
           <div className="p-4 bg-red-100 text-red-600 rounded-2xl mr-6 mb-4 md:mb-0 shrink-0 animate-pulse">
             <AlertTriangle size={32} />
           </div>
           <div>
              <h2 className="text-xl font-bold text-red-700 mb-2">最新安全生产提醒</h2>
              <p className="text-red-800/80 leading-relaxed">
                近期气温变化较大，请各部门做好设备防冻保温工作。定于12月25日进行全厂安全大检查，请提前做好自查自纠。
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Management System */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center tracking-tight">
              <ShieldCheck className="mr-4 text-primary-500" size={32} /> 安全管理体系
            </h2>
            <div className="bg-white rounded-[2rem] shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-10 space-y-10">
              {[
                { title: "一级：安全生产责任制", desc: "明确各级管理人员和岗位人员的安全职责，形成全员参与的责任网络。" },
                { title: "二级：安全专项预案", desc: "包括火灾、设备故障、自然灾害等专项预案，定期演练。" },
                { title: "三级：安全巡查评估", desc: "实行日常、专项、季节性相结合的检查机制，隐患整改闭环率100%。" }
              ].map((item, i) => (
                <div key={i} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-primary-500 rounded-full"></div>
                  </div>
                  {i !== 2 && <div className="absolute left-3 top-8 bottom-[-30px] w-px bg-slate-100"></div>}
                  
                  <h3 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center tracking-tight">
              <LifeBuoy className="mr-4 text-red-500" size={32} /> 应急与环保
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-red-500 to-rose-600 p-8 md:p-10 rounded-[2rem] shadow-lg text-white">
                <h3 className="font-bold text-2xl mb-6 flex items-center">应急联系电话 <div className="ml-auto animate-pulse w-3 h-3 bg-white rounded-full"></div></h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-white/20 pb-4">
                    <span className="text-red-100 font-medium">应急值班室</span>
                    <span className="font-mono font-bold text-2xl tracking-widest">022-8888-1111</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/20 pb-4">
                    <span className="text-red-100 font-medium">医疗急救</span>
                    <span className="font-mono font-bold text-2xl">120</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-red-100 font-medium">火警</span>
                    <span className="font-mono font-bold text-2xl">119</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100">
                <h3 className="font-bold text-lg mb-4 text-slate-900">环保承诺</h3>
                <div className="flex items-start space-x-4 bg-green-50 p-4 rounded-2xl">
                  <CheckCircle className="text-green-500 shrink-0 mt-1" />
                  <p className="text-green-800 text-sm leading-relaxed font-medium">所有发电项目严格执行超低排放标准，风电光伏项目运行过程零排放，全过程注重生态保护与植被恢复。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;