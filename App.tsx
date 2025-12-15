import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Check, 
  BarChart, 
  Lock, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

import SystemDiagram from './components/SystemDiagram';
import ApplyModal from './components/ApplyModal';
import { SERVICE_MODULES, PROCESS_STEPS, PRICING_TIERS, CASE_STUDIES } from './constants';
import { CaseStudy } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy>(CASE_STUDIES[0]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-background text-zinc-300 font-sans selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
              <span className="font-bold text-white tracking-tight">CSGA_SYSTEMS</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#system" className="hover:text-white transition-colors text-sm font-medium">System</a>
                <a href="#modules" className="hover:text-white transition-colors text-sm font-medium">Modules</a>
                <a href="#proof" className="hover:text-white transition-colors text-sm font-medium">Proof</a>
                <a href="#process" className="hover:text-white transition-colors text-sm font-medium">Process</a>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <a href="#" className="text-xs text-zinc-500 hover:text-white flex items-center gap-1">
                    <Lock size={12} /> Client Login
                </a>
                <button 
                  onClick={() => setIsApplyModalOpen(true)}
                  className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-zinc-200 transition-colors"
                >
                  Apply for Audit
                </button>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#system" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-zinc-800">System</a>
              <a href="#modules" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800">Modules</a>
              <a href="#proof" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800">Proof</a>
              <button 
                onClick={() => {
                    setIsApplyModalOpen(true);
                    setIsMenuOpen(false);
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-blue-400 hover:bg-zinc-800"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="system" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <span className="text-xs font-mono text-zinc-400">AGENCY CAPACITY: <span className="text-yellow-500">LIMITED (2 SPOTS)</span></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            We don’t chase virality. <br className="hidden md:block" />
            <span className="text-zinc-500">We build revenue systems.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400 mb-10">
            For creators and coaches who want to turn attention into predictable revenue using engineered funnels, not hope.
          </p>
          <div className="flex justify-center gap-4">
            <button 
               onClick={() => setIsApplyModalOpen(true)}
               className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
            >
              View System Architecture <ChevronRight size={16} />
            </button>
            <a href="#proof" className="px-8 py-3 rounded-lg font-medium text-zinc-400 hover:text-white border border-transparent hover:border-zinc-800 transition-all">
              See Case Studies
            </a>
          </div>
        </div>

        {/* System Diagram Component */}
        <SystemDiagram />
        
        <div className="text-center mt-8 text-sm text-zinc-600 font-mono">
            FIG 1.0: STANDARD CSGA REVENUE TOPOLOGY
        </div>
      </section>

      {/* Services / Modules */}
      <section id="modules" className="py-20 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">System Modules</h2>
            <p className="text-zinc-400">Deployed as independent components or a complete ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_MODULES.map((module) => (
              <div key={module.id} className="group bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 rounded-xl p-6 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg group-hover:bg-zinc-800 transition-colors">
                        <module.icon className="text-zinc-300" size={24} />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded">MOD_0{module.id === 'arch' ? '1' : module.id === 'strategy' ? '2' : module.id === 'capture' ? '3' : '4'}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                <p className="text-zinc-400 text-sm mb-6 min-h-[40px]">{module.description}</p>
                
                <div className="bg-zinc-950/50 rounded-lg p-4 border border-zinc-800/50">
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-3">Deliverables</span>
                    <ul className="space-y-2">
                        {module.deliverables.map((item, idx) => (
                            <li key={idx} className="text-sm text-zinc-300 flex items-center gap-2">
                                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center gap-2">
                    <Check className="text-emerald-500" size={16} />
                    <span className="text-xs text-emerald-500/80 font-mono">OUTCOME: {module.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof & Data */}
      <section id="proof" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <h2 className="text-2xl font-bold text-white mb-2">System Performance</h2>
                <p className="text-zinc-400">Real data from active client deployments.</p>
            </div>
            <div className="flex bg-zinc-900 rounded-lg p-1 border border-zinc-800">
                {CASE_STUDIES.map((study) => (
                    <button
                        key={study.id}
                        onClick={() => setActiveCaseStudy(study)}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                            activeCaseStudy.id === study.id 
                            ? 'bg-zinc-800 text-white shadow-sm' 
                            : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                    >
                        {study.clientType}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden">
                 <div className="flex justify-between items-center mb-8">
                    <div>
                        <h4 className="text-sm font-mono text-zinc-500 uppercase">Metric</h4>
                        <div className="text-lg text-white font-medium">{activeCaseStudy.metric}</div>
                    </div>
                    <div className="text-right">
                         <h4 className="text-sm font-mono text-zinc-500 uppercase">Growth</h4>
                         <div className="text-3xl text-emerald-400 font-bold">{activeCaseStudy.value}</div>
                    </div>
                 </div>
                 
                 <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={activeCaseStudy.chartData}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                            <XAxis dataKey="month" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff' }}
                                itemStyle={{ color: '#10b981' }}
                            />
                            <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>
                    </ResponsiveContainer>
                 </div>
            </div>

            {/* Context Area */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-center">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                    <BarChart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">The Solution</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                    {activeCaseStudy.description}
                </p>
                
                <div className="mt-auto pt-8 border-t border-zinc-800/50">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span className="text-xs text-zinc-500 font-mono uppercase">VERIFIED RESULT</span>
                    </div>
                    <div className="text-xs text-zinc-600">
                        *Data anonymized for client privacy.
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section id="process" className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-2xl font-bold text-white mb-2">Implementation Protocol</h2>
          </div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
                {PROCESS_STEPS.map((step, index) => (
                    <div key={step.id} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="md:w-1/2 pl-12 md:pl-0 md:px-12">
                           <div className={`bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <span className="text-xs font-mono text-blue-500 mb-2 block tracking-wider uppercase">{step.phase}</span>
                                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-zinc-400 text-sm">{step.description}</p>
                           </div>
                        </div>
                        
                        {/* Dot */}
                        <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-zinc-950 border-4 border-zinc-800 flex items-center justify-center transform -translate-x-1/2 text-xs font-bold text-zinc-500 z-10">
                            {step.id}
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Engagement Models</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
                Transparent investment ranges for serious businesses. No hidden fees, no low-ticket fluff.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier) => (
                <div 
                    key={tier.name} 
                    className={`relative flex flex-col p-8 rounded-2xl border ${
                        tier.highlighted 
                        ? 'bg-zinc-900/80 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                        : 'bg-zinc-950 border-zinc-800'
                    }`}
                >
                    {tier.highlighted && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                            Most Popular
                        </div>
                    )}
                    
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-white mb-2">{tier.name}</h3>
                        <div className="text-xl md:text-2xl font-bold text-white font-mono mb-4 text-zinc-200">
                            {tier.priceRange}
                        </div>
                        <p className="text-sm text-zinc-400">{tier.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                        {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                <Check size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button 
                        onClick={() => setIsApplyModalOpen(true)}
                        className={`w-full py-3 rounded-lg text-sm font-bold transition-all ${
                            tier.highlighted
                            ? 'bg-white text-black hover:bg-zinc-200'
                            : 'bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-700'
                        }`}
                    >
                        {tier.cta}
                    </button>
                </div>
            ))}
        </div>
      </section>

      {/* Founder / About */}
      <section className="py-20 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-3xl mx-auto px-4 text-center">
             <div className="w-20 h-20 bg-zinc-800 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-serif italic text-zinc-600">
                F
             </div>
             <blockquote className="text-xl md:text-2xl text-zinc-300 font-serif italic leading-relaxed mb-8">
                "Content without a system is just vanity. We built CSGA because we were tired of seeing brilliant creators broke, and mediocre creators rich because they understood funnels."
             </blockquote>
             <cite className="not-italic flex flex-col items-center">
                 <span className="text-white font-bold text-lg">The Founder</span>
                 <span className="text-zinc-500 text-sm">Systems Architect & Strategist</span>
             </cite>
          </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 bg-black text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-zinc-800 rounded-sm"></div>
              <span className="font-bold text-zinc-500 tracking-tight">CSGA_SYSTEMS</span>
            </div>
            
            <div className="flex gap-8 text-zinc-500">
                <a href="#" className="hover:text-zinc-300">Terms</a>
                <a href="#" className="hover:text-zinc-300">Privacy</a>
                <a href="#" className="hover:text-zinc-300">System Status</a>
            </div>

            <div className="text-zinc-600">
                &copy; {new Date().getFullYear()} CSGA. All rights reserved.
            </div>
        </div>
      </footer>

      <ApplyModal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />
    </div>
  );
};

export default App;
