import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-[#fbfbfd] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">联系我们</h1>
          <p className="text-xl text-slate-500 font-light">如有任何业务咨询或合作意向，请随时联系我们</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto items-start">
          {/* Info Card - Dark Themed */}
          <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 blur-[80px] rounded-full"></div>
            
            <div className="p-10 md:p-12 relative z-10">
              <h2 className="text-3xl font-bold mb-10 tracking-tight">联系方式</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 bg-white/10 rounded-2xl mr-5 backdrop-blur-md">
                     <MapPin className="text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">公司地址</h3>
                    <p className="text-slate-400 font-light">天津经济技术开发区泰达MSD-H区双碳大厦3A层</p>
                    <p className="text-slate-500 text-sm mt-1">邮编：300457</p>
                  </div>
                </div>
                <div className="flex items-center">
                   <div className="p-3 bg-white/10 rounded-2xl mr-5 backdrop-blur-md">
                     <Phone className="text-primary-400" />
                   </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">联系电话</h3>
                    <p className="text-slate-400 font-light">022-####-#### (总机)</p>
                  </div>
                </div>
                <div className="flex items-center">
                   <div className="p-3 bg-white/10 rounded-2xl mr-5 backdrop-blur-md">
                     <Mail className="text-primary-400" />
                   </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">电子邮箱</h3>
                    <p className="text-slate-400 font-light">contact@huaneng.com.cn</p>
                  </div>
                </div>
                <div className="flex items-center">
                   <div className="p-3 bg-white/10 rounded-2xl mr-5 backdrop-blur-md">
                     <Clock className="text-primary-400" />
                   </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">工作时间</h3>
                    <p className="text-slate-400 font-light">周一至周五: 9:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="h-64 bg-slate-800 relative grayscale opacity-80 hover:grayscale-0 transition-all duration-500">
               <div className="absolute inset-0 flex items-center justify-center bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/117.702,39.034,13,0,0/600x300?access_token=pk.mock')] bg-cover bg-center">
                  <div className="bg-slate-900/90 p-4 rounded-xl shadow-lg text-center backdrop-blur-md border border-white/10">
                     <MapPin className="text-primary-500 mx-auto mb-2" size={32} />
                     <p className="font-bold text-white">天津泰达MSD-H区</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Form - Apple Input Style */}
          <div className="bg-white rounded-[2.5rem] shadow-[0_2px_40px_-10px_rgba(0,0,0,0.05)] p-10 md:p-12 border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">在线留言</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">姓名</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-300" placeholder="您的姓名" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">电话</label>
                  <input type="tel" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-300" placeholder="联系电话" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">邮箱</label>
                <input type="email" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-300" placeholder="electronic@mail.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">留言内容</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-300 resize-none" placeholder="请输入您想咨询的内容..."></textarea>
              </div>
              <button type="button" className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-black transition-all duration-300 shadow-xl shadow-slate-900/20 flex justify-center items-center hover:scale-[1.02] active:scale-[0.98]">
                <Send className="mr-2 h-5 w-5" /> 发送留言
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;