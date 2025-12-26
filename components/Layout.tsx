import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, ChevronRight, Github, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-[#fbfbfd] selection:bg-teal-500 selection:text-white">
      {/* Navigation - Floating Island Style */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 flex justify-center ${
          isScrolled ? 'pt-4' : 'pt-6'
        }`}
      >
        <div 
          className={`
            px-6 rounded-full flex items-center justify-between transition-all duration-500
            ${isScrolled 
              ? 'w-[90%] md:w-[85%] lg:w-[1000px] bg-white/70 backdrop-blur-xl shadow-lg border border-white/40 py-3' 
              : 'w-full px-8 md:px-12 bg-transparent py-4'
            }
          `}
        >
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <div className={`
              p-2 rounded-full transition-all duration-300
              ${isScrolled ? 'bg-gradient-to-br from-primary-500 to-teal-400 text-white' : 'bg-white/20 backdrop-blur-md text-white'}
            `}>
              <Leaf className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" fillOpacity={0.2} />
            </div>
            <span className={`ml-3 text-lg font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              华能天津<span className={isScrolled ? 'text-primary-600' : 'text-teal-200'}>清洁能源</span>
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group overflow-hidden ${
                    isActive
                      ? isScrolled ? 'text-primary-700 bg-primary-50' : 'text-white bg-white/20 backdrop-blur-lg'
                      : isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                 <span className="relative z-10">{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-28 px-6 lg:hidden flex flex-col items-center"
          >
            <div className="flex flex-col w-full max-w-sm space-y-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-center py-4 text-xl font-medium border-b border-gray-100 transition-colors ${
                      isActive ? 'text-primary-600' : 'text-slate-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow relative">
        <Outlet />
      </main>

      {/* Footer - Minimalist */}
      <footer className="bg-slate-950 text-slate-400 py-20 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="flex items-center space-x-2 mb-6 text-white">
                <Leaf className="w-6 h-6 text-primary-500" />
                <span className="text-xl font-bold tracking-tight">{COMPANY_NAME}</span>
              </div>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-md text-lg font-light">
                致力于新能源技术研发与应用，推动绿色可持续发展。华能集团旗下核心清洁能源平台。
              </p>
              <div className="flex space-x-6">
                 <a href="#" className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform duration-300"><Linkedin size={22} /></a>
                 <a href="#" className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform duration-300"><Github size={22} /></a>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-white font-semibold mb-6">浏览</h3>
              <ul className="space-y-4">
                <li><NavLink to="/about" className="hover:text-primary-400 transition-colors block">组织介绍</NavLink></li>
                <li><NavLink to="/honors" className="hover:text-primary-400 transition-colors block">荣誉资质</NavLink></li>
                <li><NavLink to="/news" className="hover:text-primary-400 transition-colors block">新闻动态</NavLink></li>
                <li><NavLink to="/safety" className="hover:text-primary-400 transition-colors block">安全通知</NavLink></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-white font-semibold mb-6">联系</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                  <span>天津经济技术开发区泰达MSD-H区双碳大厦3A层</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                  <span>022-####-####</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                  <span>contact@huaneng.com.cn</span>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
               <h3 className="text-white font-semibold mb-6">内部</h3>
               <ul className="space-y-4">
                 <li><a href="#" className="flex items-center hover:text-primary-400 transition-colors">OA 系统 <ChevronRight size={14} className="ml-1" /></a></li>
                 <li><a href="#" className="flex items-center hover:text-primary-400 transition-colors">企业邮箱 <ChevronRight size={14} className="ml-1" /></a></li>
               </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <p>&copy; {new Date().getFullYear()} 华能（天津）清洁能源有限公司.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-slate-400">隐私政策</a>
               <a href="#" className="hover:text-slate-400">使用条款</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;