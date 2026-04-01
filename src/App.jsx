import React, { useState, useEffect } from 'react';
import { 
  Search, LogIn, UserPlus, FileText, BarChart3, Database, Globe, 
  ChevronRight, Bell, Download, ShieldCheck, Mail, Filter, 
  CheckCircle2, AlertCircle, BookOpen, Layers, Menu, X, ArrowRight,
  Calendar, ExternalLink, Map as MapIcon, ChevronDown, Info, HelpCircle
} from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [purposeText, setPurposeText] = useState('');

  // 主题色配置
  const colors = {
    primary: '#8B0000', // 学术红
    accent: '#C5A059',  // 学术金
    bgGray: '#f4f4f4'
  };

  // 模拟数据下载列表
  const dataFiles = [
    { name: "用户手册 (CNSSS_2024_Manual_v1.0.pdf)", sha1: "9BF1E673136F375BEB097E88B6018BFB88855F17B", type: "PDF" },
    { name: "调查问卷 (CNSSS_2024_Main_Questionnaire.pdf)", sha1: "307FB0F902E76FD08E0722324A4CE5FA24FEC99", type: "PDF" },
    { name: "体育参与模块", sha1: "FD73EB699CBACBFAAFF1C55BCDBA11B23EAA0736", type: "dta / sav" },
    { name: "数字体育与社交模块", sha1: "8644E8D3716EF1B31669211BEF54311453CCFB70", type: "dta / sav" },
    { name: "身心健康状况模块", sha1: "5433348D5D1420889ACD0A749E27E55F501038DB", type: "dta / sav" },
    { name: "体育消费模块", sha1: "4BDD100A72B7ED885A83C61016AA0C7E4822748", type: "dta / sav" }
  ];

  // 视图切换处理
  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  // --- 子组件：页头 ---
  const Header = () => (
    <header className="w-full">
      <div className="bg-[#1a1a1a] text-white py-1.5 px-4 text-[11px] font-light flex justify-end items-center space-x-4">
        <button className="hover:text-[#C5A059] transition flex items-center">
          <Globe className="w-3 h-3 mr-1 text-orange-500" /> ENGLISH
        </button>
      </div>
      <div className="bg-[#8B0000] text-white py-8 px-4 flex flex-col items-center">
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
            <span className="text-[#8B0000] font-black text-xl italic">CNSSS</span>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold tracking-[0.2em]">中国体育与社会调查</h1>
            <p className="text-[10px] mt-1 uppercase tracking-[0.2em] opacity-80">Chinese National Sports and Society Survey</p>
          </div>
        </div>
      </div>
      <nav className="bg-[#700000] sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center text-white text-sm font-medium">
            <li><button onClick={() => navigateTo('home')} className={`py-4 px-6 hover:bg-[#660000] transition ${currentView === 'home' ? 'bg-[#660000] border-b-2 border-[#C5A059]' : ''}`}>首页</button></li>
            <li className="relative group">
              <button className={`py-4 px-6 hover:bg-[#660000] transition flex items-center ${currentView.includes('intro') ? 'bg-[#660000] border-b-2 border-[#C5A059]' : ''}`}>项目介绍 <ChevronDown className="w-3 h-3 ml-1" /></button>
              <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-xl w-40 top-full left-0 border-t-2 border-[#8B0000]">
                <button onClick={() => navigateTo('intro-overview')} className="w-full text-left px-4 py-2 hover:bg-gray-100 border-b">项目概况</button>
                <button onClick={() => navigateTo('intro-guide')} className="w-full text-left px-4 py-2 hover:bg-gray-100">使用说明</button>
              </div>
            </li>
            <li><button onClick={() => navigateTo('docs')} className={`py-4 px-6 hover:bg-[#660000] transition ${currentView === 'docs' ? 'bg-[#660000] border-b-2 border-[#C5A059]' : ''}`}>项目文档</button></li>
            <li><button onClick={() => navigateTo('data')} className={`py-4 px-6 hover:bg-[#660000] transition ${currentView === 'data' ? 'bg-[#660000] border-b-2 border-[#C5A059]' : ''}`}>数据与成果</button></li>
            <li><button onClick={() => navigateTo('register')} className={`py-4 px-6 hover:bg-[#660000] transition text-[#C5A059] font-bold ${currentView === 'register' ? 'bg-[#660000] border-b-2 border-[#C5A059]' : ''}`}>用户注册</button></li>
          </ul>
        </div>
      </nav>
    </header>
  );

  // --- 视图: 首页 ---
  const HomeView = () => (
    <div className="animate-fadeIn space-y-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="bg-white p-2 shadow-sm mb-8 border border-gray-100">
            <div className="relative h-64 md:h-[450px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070" className="w-full h-full object-cover" alt="Survey" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6">
                <h3 className="text-xl font-bold">CNSSS 2024 全国调查数据公报发布</h3>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 border shadow-sm border-t-4 border-[#8B0000]">
            <h2 className="text-xl font-bold text-[#8B0000] border-b pb-2 mb-6 text-center">核心调查指标</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
              <div className="text-center p-4 bg-gray-50 rounded border border-gray-100">
                <div className="text-2xl font-bold text-[#8B0000]">11,385</div>
                <div className="text-[10px] text-gray-500">有效成人样本</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded border border-gray-100">
                <div className="text-2xl font-bold text-[#8B0000]">95.1%</div>
                <div className="text-[10px] text-gray-500">低强度活动率</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded border border-gray-100">
                <div className="text-2xl font-bold text-[#8B0000]">33.9%</div>
                <div className="text-[10px] text-gray-500">体育人口比例</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded border border-gray-100">
                <div className="text-2xl font-bold text-[#8B0000]">31</div>
                <div className="text-[10px] text-gray-500">覆盖省区市</div>
              </div>
            </div>
            <div className="mt-8 text-sm leading-8 text-gray-700 text-justify border-t pt-6">
              <p>全国体育与社会调查（CNSSS）立足全国城乡成年居民，是国内体育领域首次大规模、综合性、连续性社会调查。2024年首次全国抽样调查已圆满完成，共获得有效样本11,385份。项目旨在为体育研究、政策制定及成果转化提供高质量的基础数据支持。</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4">
          <div className="bg-white border p-4 shadow-sm">
            <h3 className="font-bold text-[#8B0000] border-b pb-2 mb-4">最新动态</h3>
            <div className="space-y-6">
              {[
                { year: '2025', date: '03-15', title: '关于推动运动促进健康事业高质量发展的指导意见发布' },
                { year: '2024', date: '12-10', title: 'CNSSS 2024 年度调查数据清理工作顺利完成' },
                { year: '2024', date: '10-05', title: '全国体育与社会调查网络(CSSN)在汉宣布成立' }
              ].map((news, i) => (
                <div key={i} className="flex gap-3 items-start group cursor-pointer">
                  <div className="flex-shrink-0 w-12 text-center border rounded overflow-hidden">
                    <div className="bg-[#8B0000] text-white text-[9px] py-0.5">{news.year}</div>
                    <div className="text-[10px] font-bold py-0.5 text-gray-600">{news.date}</div>
                  </div>
                  <p className="text-xs leading-tight group-hover:text-[#8B0000] transition-colors">{news.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 bg-[#8B0000] p-6 text-white text-center rounded shadow-lg">
            <UserPlus className="w-10 h-10 mx-auto mb-4 opacity-50" />
            <h4 className="font-bold text-lg mb-2">获取科研数据</h4>
            <p className="text-[10px] opacity-70 mb-4">注册并经审核后即可免费下载学术调查数据</p>
            <button onClick={() => navigateTo('register')} className="w-full py-2 bg-[#C5A059] text-black font-bold text-xs rounded hover:bg-yellow-400 transition">立即申请</button>
          </div>
        </div>
      </div>
    </div>
  );

  // --- 视图: 项目介绍 ---
  const IntroView = () => (
    <div className="animate-fadeIn max-w-4xl mx-auto space-y-8">
      {currentView === 'intro-overview' && (
        <div className="bg-white p-10 border shadow-sm border-t-4 border-[#8B0000]">
          <h2 className="text-2xl font-bold text-[#8B0000] border-b pb-2 mb-8">项目概况</h2>
          <div className="space-y-6 text-sm text-gray-700 leading-[2.2] text-justify font-sans">
            <p>
              <strong>全国体育与社会调查（Chinese National Sports and Society Survey，简称 CNSSS）</strong>
              是中国体育领域首个全国性、综合性、连续性的学术调查项目。项目由<strong>武汉体育学院</strong>牵头，联合<strong>中国人民大学中国调查与数据中心</strong>共同执行。
            </p>
            <p>
              CNSSS 致力于建设具有国际学术水准、涵盖中国全境的体育社会学数据库。调查对象为中国大陆地区 18 岁及以上的城乡常住居民，内容深度覆盖体育参与、数字体育与社交、体育素养、体育消费、身心健康状况以及社会情境意愿等核心领域。
            </p>
            <p>
              2024 年度调查采用多阶段分层随机抽样设计（PPS），覆盖全国 31 个省、自治区、直辖市，最终获得 11,385 份有效样本。通过系统地收集个人、家庭及社区层面的多维数据，CNSSS 旨在揭示社会变迁背景下中国居民体育生活的现状与趋势，为提升体育治理科学化水平、推动“运动促进健康”国家战略提供坚实的科学依据。
            </p>
          </div>
        </div>
      )}

      {currentView === 'intro-guide' && (
        <div className="bg-white p-10 border shadow-sm border-t-4 border-[#8B0000]">
          <h2 className="text-2xl font-bold text-[#8B0000] border-b pb-2 mb-8 flex items-center">
            <HelpCircle className="w-6 h-6 mr-2 text-[#C5A059]" /> 数据中心使用说明
          </h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded border border-gray-100">
                <h4 className="font-bold text-[#8B0000] mb-4 flex items-center"><span className="bg-[#8B0000] text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs mr-2">1</span> 账户注册</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  点击导航栏“用户注册”，如实填写您的姓名、所属单位及学术职称。请确保信息的真实性，我们将核实您的研究人员身份。
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded border border-gray-100">
                <h4 className="font-bold text-[#8B0000] mb-4 flex items-center"><span className="bg-[#8B0000] text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs mr-2">2</span> 审核与登录</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  系统管理员将在 1-3 个工作日内完成审核。审核通过后，您可以使用注册邮箱登录系统下载所需数据集。
                </p>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400">
              <p className="text-xs text-yellow-800 italic">* 仅限学术研究用途，严禁转售或用于商业目的。</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // --- 视图: 注册页面 ---
  const RegisterView = () => (
    <div className="animate-fadeIn max-w-2xl mx-auto py-8">
      <div className="bg-white shadow-2xl border-t-8 border-[#8B0000] rounded-sm overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800">创建研究者账户</h2>
            <p className="text-xs text-gray-500 mt-2 italic">—— 请提供真实有效的身份信息以便通过审核 ——</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('演示系统：申请已提交。'); }} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 block">姓名 <span className="text-red-500">*</span></label>
                <input type="text" required className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#8B0000] outline-none text-sm" placeholder="真实姓名" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 block">所属院校/单位 <span className="text-red-500">*</span></label>
                <input type="text" required className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#8B0000] outline-none text-sm" placeholder="单位全称" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 block">电子邮箱 <span className="text-red-500">*</span></label>
                <input type="email" required className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#8B0000] outline-none text-sm" placeholder="联系邮箱" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 block">联系电话 <span className="text-red-500">*</span></label>
                <input type="tel" required className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#8B0000] outline-none text-sm" placeholder="手机号码" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 block">学术身份/职称 <span className="text-red-500">*</span></label>
              <select required defaultValue="" className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#8B0000] outline-none text-sm bg-white">
                <option value="" disabled>请选择您的当前身份</option>
                <option value="full_professor">正高级 (Full Professor / 研究员)</option>
                <option value="assoc_professor">副高级 (Associate Professor / 副研究员)</option>
                <option value="lecturer">讲师 (Lecturer)</option>
                <option value="postdoc">博士后 (Postdoc)</option>
                <option value="phd_student">博士在读 (PhD Student)</option>
                <option value="master_student">硕士在读 (Master Student)</option>
                <option value="other">其他</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 block">申请目的 (简要说明) <span className="text-red-500">*</span></label>
              <textarea 
                required 
                rows="4" 
                maxLength={200}
                onChange={(e) => setPurposeText(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#8B0000] outline-none text-sm resize-none" 
                placeholder="200字以内。"></textarea>
              <p className={`text-[10px] text-right ${purposeText.length >= 200 ? 'text-red-600' : 'text-gray-400'}`}>已输入 {purposeText.length} / 200</p>
            </div>

            <div className="bg-gray-50 p-4 border border-gray-100 flex items-start space-x-3">
              <input type="checkbox" required className="mt-1 accent-[#8B0000]" id="terms" />
              <label htmlFor="terms" className="text-[11px] text-gray-600 leading-relaxed cursor-pointer font-medium">
                本人郑重承诺：下载数据仅用于学术研究，严格遵守安全协议，不转让原始数据，并在成果中引用数据来源。
              </label>
            </div>

            <button type="submit" className="w-full py-4 bg-[#8B0000] text-white font-bold text-sm tracking-widest shadow-lg hover:bg-[#660000] transition active:scale-[0.98]">
              提交申请
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // --- 视图: 数据中心 ---
  const DataView = () => (
    <div className="animate-fadeIn flex flex-col lg:flex-row gap-8">
      <aside className="lg:w-1/4">
        <div className="bg-white border shadow-sm">
          <div className="bg-gray-100 p-4 border-b font-bold text-gray-700 text-sm flex items-center">
            <Database className="w-4 h-4 mr-2 text-[#8B0000]" /> 调查波次
          </div>
          <ul className="text-sm">
            <li className="p-4 border-b border-l-4 border-[#8B0000] bg-red-50 text-[#8B0000] font-bold">2024 年全国追踪调查</li>
            <li className="p-4 border-b hover:bg-gray-50 transition cursor-pointer">2023 年预调查</li>
            <li className="p-4 hover:bg-gray-50 transition cursor-pointer font-medium text-gray-500">专项研究: 冰雪运动专题</li>
          </ul>
        </div>
      </aside>
      <div className="lg:w-3/4">
        <div className="bg-white border shadow-sm p-8">
          <h2 className="text-2xl font-bold text-[#8B0000] border-b-2 border-[#8B0000] pb-2 mb-8">2024 年全国体育与社会调查数据下载</h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-4 border-l-4 border-[#8B0000] pl-3 text-sm">与数据使用相关的文档</h4>
              <div className="space-y-3 ml-4">
                {dataFiles.slice(0, 2).map((f, i) => (
                  <div key={i} className="flex items-start">
                    <FileText className="w-4 h-4 text-red-600 mt-0.5 mr-3" />
                    <div>
                      <button className="text-sm text-blue-800 hover:underline text-left font-medium">{f.name}</button>
                      <p className="text-[10px] font-mono text-gray-400 mt-1 uppercase">SHA1: {f.sha1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-4 border-l-4 border-[#8B0000] pl-3 text-sm">核心数据模块 (STATA/SPSS)</h4>
              <div className="overflow-x-auto border border-gray-100 rounded">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-gray-50 text-gray-600 text-xs">
                    <tr>
                      <th className="border-b p-3 text-left">数据模块内容</th>
                      <th className="border-b p-3 text-center">支持格式</th>
                      <th className="border-b p-3 text-center">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataFiles.slice(2).map((f, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition border-b last:border-0">
                        <td className="p-3">
                          <p className="font-semibold text-gray-800 text-sm">{f.name}</p>
                          <p className="text-[10px] font-mono text-gray-400 mt-1 uppercase">SHA1: {f.sha1}</p>
                        </td>
                        <td className="p-3 text-center text-[10px] text-gray-500 font-bold uppercase">{f.type}</td>
                        <td className="p-3 text-center">
                          <button className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-sm text-xs font-bold hover:bg-[#8B0000] hover:text-white transition">
                            <Download className="w-3 h-3 inline mr-1" /> 下载
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // --- 视图: 项目文档 ---
  const DocsView = () => (
    <div className="animate-fadeIn max-w-4xl mx-auto bg-white p-10 border shadow-sm border-t-4 border-[#8B0000]">
      <h2 className="text-2xl font-bold text-[#8B0000] border-b pb-2 mb-8">抽样设计方案</h2>
      <div className="space-y-8 text-sm text-gray-700 leading-relaxed text-justify">
        <p>CNSSS 2024 采用多阶段分层随机抽样（PPS），代表了全国 18 岁以上成年人口的体育生活全貌。</p>
        <div className="bg-gray-50 p-10 border rounded-sm flex flex-col items-center">
           <div className="text-center mb-6">
              <h4 className="font-bold text-[#8B0000]">2024 年度全国调查覆盖范围图</h4>
              <p className="text-[10px] text-gray-400 mt-1 tracking-widest uppercase">Coverage Overview</p>
           </div>
           <div className="w-full max-w-md h-64 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center text-gray-400 italic">
             <MapIcon className="w-12 h-12 mb-3 opacity-20" />
             <span>[ 标准中国地图数据可视化组件加载中 ]</span>
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col text-gray-800 font-sans antialiased">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-10">
        {currentView === 'home' && <HomeView />}
        {currentView.startsWith('intro') && <IntroView />}
        {currentView === 'docs' && <DocsView />}
        {currentView === 'data' && <DataView />}
        {currentView === 'register' && <RegisterView />}
      </main>

      {/* --- 页脚重构: 四大模块横向排列 --- */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-12 border-t-8 border-[#8B0000]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* 1. 项目导航 */}
            <div className="space-y-4">
              <h4 className="text-white font-bold border-b border-gray-700 pb-2 text-sm tracking-widest">项目导航</h4>
              <ul className="text-[11px] space-y-2.5">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">首页展示</button></li>
                <li><button onClick={() => navigateTo('intro-overview')} className="hover:text-white transition-colors">项目概况</button></li>
                <li><button onClick={() => navigateTo('intro-guide')} className="hover:text-white transition-colors">使用说明</button></li>
                <li><button onClick={() => navigateTo('docs')} className="hover:text-white transition-colors">抽样方案</button></li>
              </ul>
            </div>

            {/* 2. 资源下载 */}
            <div className="space-y-4">
              <h4 className="text-white font-bold border-b border-gray-700 pb-2 text-sm tracking-widest">资源下载</h4>
              <ul className="text-[11px] space-y-2.5">
                <li><button onClick={() => navigateTo('data')} className="hover:text-white transition-colors">调查原始数据</button></li>
                <li><button className="hover:text-white transition-colors">技术手册下载</button></li>
                <li><button className="hover:text-white transition-colors">调查问卷下载</button></li>
                <li><button className="hover:text-white transition-colors">公报全文 PDF</button></li>
              </ul>
            </div>

            {/* 3. 快捷入口 */}
            <div className="space-y-4">
              <h4 className="text-white font-bold border-b border-gray-700 pb-2 text-sm tracking-widest">快捷入口</h4>
              <ul className="text-[11px] space-y-2.5">
                <li><button onClick={() => navigateTo('register')} className="hover:text-[#C5A059] font-bold transition-colors">注册申请权限</button></li>
                <li><button className="hover:text-white transition-colors">引用规范说明</button></li>
                <li><button className="hover:text-white transition-colors">常见问题 FAQ</button></li>
                <li><button className="hover:text-white transition-colors">数据清理说明</button></li>
              </ul>
            </div>

            {/* 4. 联系与支持 */}
            <div className="space-y-4">
              <h4 className="text-white font-bold border-b border-gray-700 pb-2 text-sm tracking-widest">联系与支持</h4>
              <div className="text-[11px] leading-[2.2]">
                <p className="flex items-center"><Mail className="w-3 h-3 mr-2" /> cnsss_data@whsu.edu.cn</p>
                <p className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-[#C5A059]" /> 027-8719xxxx (技术支持)</p>
                <p className="mt-2 text-gray-500">湖北省武汉市珞瑜路461号</p>
                <p className="text-gray-500">武汉体育学院 CNSSS 项目组</p>
              </div>
            </div>
          </div>

          {/* 底部版权与合作伙伴 */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] space-y-4 md:space-y-0 opacity-60">
            <div className="flex space-x-6 font-medium">
              <span className="text-white">武汉体育学院</span>
              <span>中国体育社会调查网络 (CSSN)</span>
            </div>
            <p>© 2024-2026 CNSSS 全国体育与社会调查项目组. 保留所有权利</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
