import React, { useState, useEffect } from 'react';
import { 
  Search, LogIn, UserPlus, FileText, BarChart3, Database, Globe, 
  ChevronRight, Bell, Download, ShieldCheck, Mail, Filter, 
  CheckCircle2, AlertCircle, BookOpen, Layers, Menu, X, ArrowRight,
  Calendar, ExternalLink, Map as MapIcon, ChevronDown, Info
} from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [purposeText, setPurposeText] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 主题色配置
  const colors = {
    primary: '#8B0000', // 学术红
    primaryDark: '#660000',
    accent: '#C5A059',  // 学术金
    bgGray: '#f4f4f4'
  };

  // 模拟数据下载列表 (CHARLS 风格)
  const dataFiles = [
    { name: "用户手册 (CNSSS_2024_Manual_v1.0.pdf)", sha1: "9BF1E673136F375BEB097E88B6018BFB88855F17B", type: "PDF" },
    { name: "调查问卷 (CNSSS_2024_Main_Questionnaire.pdf)", sha1: "307FB0F902E76FD08E0722324A4CE5FA24FEC99", type: "PDF" },
    { name: "基本信息与权重模块", sha1: "8644E8D3716EF1B31669211BEF54311453CCFB70", type: "dta / sav" },
    { name: "体育参与及锻炼强度模块", sha1: "FD73EB699CBACBFAAFF1C55BCDBA11B23EAA0736", type: "dta / sav" },
    { name: "体育消费与旅游支出模块", sha1: "4BDD100A72B7ED885A83C61016AA0C7E4822748", type: "dta / sav" }
  ];

  // 视图切换处理
  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
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
              <button className="py-4 px-6 hover:bg-[#660000] transition flex items-center">项目介绍 <ChevronDown className="w-3 h-3 ml-1" /></button>
              <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-xl w-40 top-full left-0 border-t-2 border-[#8B0000]">
                <button onClick={() => navigateTo('intro')} className="w-full text-left px-4 py-2 hover:bg-gray-100 border-b">项目概况</button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 border-b">项目团队</button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">组织实施</button>
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

  // --- 视图 1: 首页 ---
  const HomeView = () => (
    <div className="animate-fadeIn space-y-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="bg-white p-2 shadow-sm mb-8 border border-gray-100">
            <div className="relative h-64 md:h-[450px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070" className="w-full h-full object-cover" alt="Survey" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6">
                <h3 className="text-xl font-bold">CNSSS 2024 全国调查数据公报要点发布</h3>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 border shadow-sm border-t-4 border-[#8B0000]">
            <h2 className="text-xl font-bold text-[#8B0000] border-b pb-2 mb-6">项目概况</h2>
            <div className="text-sm leading-8 text-gray-700 space-y-4">
              <p>全国体育与社会调查（CNSSS）立足全国城乡成年居民，是国内体育领域首次大规模、综合性、连续性社会调查。项目由武汉体育学院牵头，中国人民大学中国调查与数据中心负责实施。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
                <div className="text-center p-4 bg-gray-50 rounded">
                  <div className="text-2xl font-bold text-[#8B0000]">11,385</div>
                  <div className="text-[10px] text-gray-500">有效成人样本</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <div className="text-2xl font-bold text-[#8B0000]">95.1%</div>
                  <div className="text-[10px] text-gray-500">低强度活动率</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <div className="text-2xl font-bold text-[#8B0000]">33.9%</div>
                  <div className="text-[10px] text-gray-500">体育人口比例</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <div className="text-2xl font-bold text-[#8B0000]">31</div>
                  <div className="text-[10px] text-gray-500">覆盖省区市</div>
                </div>
              </div>
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
          <div className="mt-6 bg-[#8B0000] p-6 text-white text-center rounded shadow-lg transform hover:-translate-y-1 transition-transform">
            <UserPlus className="w-10 h-10 mx-auto mb-4 opacity-50" />
            <h4 className="font-bold text-lg mb-2">获取科研数据</h4>
            <p className="text-[10px] opacity-70 mb-4">注册并经审核后即可免费下载学术调查数据</p>
            <button onClick={() => navigateTo('register')} className="w-full py-2 bg-[#C5A059] text-black font-bold text-xs rounded hover:bg-yellow-400 transition">立即申请</button>
          </div>
        </div>
      </div>
    </div>
  );

  // --- 视图 2: 注册页面 (学术严谨风格) ---
  const RegisterView = () => (
    <div className="animate-fadeIn max-w-2xl mx-auto py-8">
      <div className="bg-white shadow-2xl border-t-8 border-[#8B0000] rounded-sm overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800">创建研究者账户</h2>
            <p className="text-xs text-gray-500 mt-2 italic">—— 仅供学术研究使用，请提供真实有效的机构身份信息 ——</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('演示系统：申请已提交。'); }} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 block">姓名 <span className="text-red-500">*</span></label>
                <input type="text" required className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#8B0000] outline-none text-sm" placeholder="真实姓名" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 block">所属院校/单位 <span className="text-red-500">*</span></label>
                <input type="text" required className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#8B0000] outline-none text-sm" placeholder="例如：武汉体育学院" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 block">电子邮箱 <span className="text-red-500">*</span></label>
                <input type="email" required className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#8B0000] outline-none text-sm" placeholder="建议使用 .edu 机构邮箱" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 block">联系电话 <span className="text-red-500">*</span></label>
                <input type="tel" required className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#8B0000] outline-none text-sm" placeholder="常用联系手机" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 block">学术身份/职称 <span className="text-red-500">*</span></label>
              <select required className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#8B0000] outline-none text-sm bg-white">
                <option value="" disabled selected>请选择您的当前身份</option>
                <option>正高级 (Full Professor / 研究员)</option>
                <option>副高级 (Associate Professor / 副研究员)</option>
                <option>讲师 (Lecturer)</option>
                <option>博士后 (Postdoc)</option>
                <option>博士在读 (PhD Student)</option>
                <option>硕士在读 (Master Student)</option>
                <option>其他科研人员 (Others)</option>
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
                placeholder="请简述您的研究方向及拟使用数据的用途（200字以内）。"></textarea>
              <p className={`text-[10px] text-right ${purposeText.length >= 200 ? 'text-red-600' : 'text-gray-400'}`}>已输入 {purposeText.length} / 200</p>
            </div>

            <div className="bg-gray-50 p-4 border border-gray-100 flex items-start space-x-3">
              <input type="checkbox" required className="mt-1 accent-[#8B0000]" id="terms" />
              <label htmlFor="terms" className="text-[11px] text-gray-600 leading-relaxed cursor-pointer">
                本人保证所提供的信息真实有效，并郑重承诺：下载的 CNSSS 数据仅用于学术研究，严格遵守数据安全协议，不向任何第三方转让原始数据，并在研究成果中按规范引用数据来源。
              </label>
            </div>

            <button type="submit" className="w-full py-4 bg-[#8B0000] text-white font-bold text-sm tracking-widest shadow-lg hover:bg-[#660000] transition active:scale-[0.98]">
              提交注册并申请数据访问
            </button>
          </form>
        </div>
      </div>
      <p className="text-center mt-6 text-xs text-gray-400">已有账号？ <button className="text-[#8B0000] font-bold underline">立即登录</button></p>
    </div>
  );

  // --- 视图 3: 数据中心 ---
  const DataView = () => (
    <div className="animate-fadeIn flex flex-col lg:flex-row gap-8">
      <aside className="lg:w-1/4">
        <div className="bg-white border shadow-sm">
          <div className="bg-gray-100 p-4 border-b font-bold text-gray-700 text-sm flex items-center">
            <Database className="w-4 h-4 mr-2 text-[#8B0000]" /> 调查波次
          </div>
          <ul className="text-sm">
            <li className="p-4 border-b border-l-4 border-[#8B0000] bg-red-50 text-[#8B0000] font-bold">2024 年全国追踪调查</li>
            <li className="p-4 border-b hover:bg-gray-50 transition cursor-pointer">2022 年预调查 (Pilot)</li>
            <li className="p-4 hover:bg-gray-50 transition cursor-pointer">专项研究: 数字体育专题</li>
          </ul>
        </div>
      </aside>
      <div className="lg:w-3/4">
        <div className="bg-white border shadow-sm p-8">
          <h2 className="text-2xl font-bold text-[#8B0000] border-b-2 border-[#8B0000] pb-2 mb-8">2024 年全国体育与社会调查数据</h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-4 border-l-4 border-[#8B0000] pl-3">与数据使用相关的文档</h4>
              <div className="space-y-3 ml-4">
                {dataFiles.slice(0, 2).map((f, i) => (
                  <div key={i} className="flex items-start group">
                    <FileText className="w-4 h-4 text-red-600 mt-0.5 mr-3" />
                    <div>
                      <button className="text-sm text-blue-800 hover:underline text-left">{f.name}</button>
                      <p className="text-[10px] font-mono text-gray-400 mt-1">SHA1: {f.sha1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-4 border-l-4 border-[#8B0000] pl-3">核心数据下载 (STATA/SPSS)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-gray-50 text-gray-600">
                    <tr>
                      <th className="border p-3 text-left">模块内容</th>
                      <th className="border p-3 text-center">格式</th>
                      <th className="border p-3 text-center">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataFiles.slice(2).map((f, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition">
                        <td className="border p-3">
                          <p className="font-semibold text-gray-800">{f.name}</p>
                          <p className="text-[10px] font-mono text-gray-400 mt-1">SHA1: {f.sha1}</p>
                        </td>
                        <td className="border p-3 text-center text-xs text-gray-500 uppercase">{f.type}</td>
                        <td className="border p-3 text-center">
                          <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-sm text-xs hover:bg-[#8B0000] hover:text-white transition">
                            <Download className="w-3 h-3 inline mr-1" /> 下载
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 flex items-start space-x-3">
              <Info className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-yellow-800 leading-relaxed">
                温馨提示：数据下载权限仅向审核通过的账户开放。若您已注册，请确保登录后进行下载。引用数据请注明：CNSSS (2024) 全国体育与社会调查数据库。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // --- 视图 4: 项目文档 (采样设计图示) ---
  const DocsView = () => (
    <div className="animate-fadeIn max-w-4xl mx-auto bg-white p-10 border shadow-sm border-t-4 border-[#8B0000]">
      <h2 className="text-2xl font-bold text-[#8B0000] border-b pb-2 mb-8">抽样设计方案</h2>
      <div className="space-y-8 text-sm text-gray-700 leading-relaxed text-justify">
        <p>CNSSS 2024 年度调查采用了多阶段分层随机抽样设计（PPS），确保了样本对全国成年居民的高度代表性。</p>
        <div className="bg-gray-50 p-10 border rounded-sm flex flex-col items-center">
           <div className="text-center mb-6">
              <h4 className="font-bold text-[#8B0000]">2024 年度全国调查点分布示意</h4>
              <p className="text-[10px] text-gray-400 mt-1">含南海诸岛及完整疆域示意 (国家标准版型参考)</p>
           </div>
           <div className="w-full max-w-md h-64 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 italic">
             [ 此处集成了标准中国地图组件：包含 31 个省份的 125 个县级采样点打点展示 ]
           </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
           <div className="p-4 border-l-4 border-[#C5A059] bg-gray-50">
             <h5 className="font-bold mb-2">第1阶段: PSU</h5>
             <p className="text-xs opacity-70">按规模比例概率抽样选取县/区</p>
           </div>
           <div className="p-4 border-l-4 border-[#C5A059] bg-gray-50">
             <h5 className="font-bold mb-2">第2阶段: SSU</h5>
             <p className="text-xs opacity-70">随机抽取村/居委会作为基本调查单元</p>
           </div>
           <div className="p-4 border-l-4 border-[#C5A059] bg-gray-50">
             <h5 className="font-bold mb-2">第3阶段: TSU</h5>
             <p className="text-xs opacity-70">电子绘图法随机确定访谈家户与个人</p>
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
        {currentView === 'intro' && <div className="p-10 bg-white border text-center text-gray-400">项目概况视图建设中...</div>}
        {currentView === 'docs' && <DocsView />}
        {currentView === 'data' && <DataView />}
        {currentView === 'register' && <RegisterView />}
      </main>

      <footer className="bg-[#1a1a1a] text-gray-400 py-12 border-t-8 border-[#8B0000]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
            <div>
              <h4 className="text-white font-bold mb-4 border-b border-gray-700 pb-2 inline-block md:block">项目导航</h4>
              <ul className="text-xs space-y-2">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition">首页展示</button></li>
                <li><button onClick={() => navigateTo('intro')} className="hover:text-white transition">项目简介</button></li>
                <li><button onClick={() => navigateTo('docs')} className="hover:text-white transition">抽样方案</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 border-b border-gray-700 pb-2 inline-block md:block">资源下载</h4>
              <ul className="text-xs space-y-2">
                <li><button onClick={() => navigateTo('data')} className="hover:text-white transition">调查原始数据</button></li>
                <li><button className="hover:text-white transition">技术手册下载</button></li>
                <li><button className="hover:text-white transition">问卷下载</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 border-b border-gray-700 pb-2 inline-block md:block">快捷入口</h4>
              <ul className="text-xs space-y-2">
                <li><button onClick={() => navigateTo('register')} className="hover:text-white transition">注册申请权限</button></li>
                <li><button className="hover:text-white transition">引用规范说明</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 border-b border-gray-700 pb-2 inline-block md:block">联系与支持</h4>
              <p className="text-[10px] leading-relaxed">
                武汉体育学院 & 中国人民大学<br />
                中国调查与数据中心 (NSRC)<br />
                邮箱: cnsss_data@whsu.edu.cn<br />
                技术支持: 027-8719xxxx
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] space-y-4 md:space-y-0 opacity-60">
            <div className="flex space-x-6">
              <span>中国人民大学</span>
              <span>武汉体育学院</span>
              <span>中国综合社会调查 (CGSS)</span>
            </div>
            <p>© 2024-2026 CNSSS 全国体育与社会调查项目组. 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
