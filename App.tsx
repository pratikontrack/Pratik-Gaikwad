import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Check, 
  Lock, 
  Zap,
  LayoutGrid
} from 'lucide-react';

import SystemDiagram from './components/SystemDiagram';
import ApplyModal from './components/ApplyModal';
import DashboardPreview from './components/DashboardPreview';
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
              <div className="w-6 h-6 bg-gradient-to-br from-white to-zinc-400 rounded-sm"></div>
              <span className="font-bold text-white tracking-tight">CSGA_SYSTEMS</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#system" className="hover:text-white transition-colors text-sm font-medium">System</a>
                <a href="#modules" className="hover:text-white transition-colors text-sm font-medium">Modules</a>
                <a href="#proof" className="hover:text-white transition-colors text-sm font-medium">Proof</a>
                <a href="#pricing" className="hover:text-white transition-colors text-sm font-medium">Pricing</a>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-xs text-zinc-500 hover:text-white flex items-center gap-1.5 transition-colors">
                    <Lock size={12} /> Client Login
                </a>
                <button 
                  onClick={() => setIsApplyModalOpen(true)}
                  className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]"
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
              <a href="#system" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-zinc-800">System</a>
              <a href="#modules" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800">Modules</a>
              <a href="#proof" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800">Proof</a>
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
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
             <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Agency Capacity: Low</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
            We don’t chase virality. <br />
            <span className="bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent">We build revenue systems.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            Turn attention into predictable revenue with engineered funnels and automation. No hype, just mechanics.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
               onClick={() => setIsApplyModalOpen(true)}
               className="bg-white text-black px-8 py-3.5 rounded-lg font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              View System Architecture <ChevronRight size={16} />
            </button>
            <a href="#proof" className="px-8 py-3.5 rounded-lg font-medium text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 hover:bg-zinc-900 transition-all">
              See Case Studies
            </a>
          </div>
        </div>

        {/* System Diagram Component */}
        <SystemDiagram />
        
        <div className="text-center mt-8 text-xs text-zinc-700 font-mono tracking-widest uppercase">
            Figure 1.0 — CSGA Revenue Topology
        </div>
      </section>

      {/* Services / Modules */}
      <section id="modules" className="py-24 border-y border-zinc-800/30 relative">
        <div className="absolute inset-0 bg-zinc-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
             <div>
                <h2 className="text-3xl font-bold text-white mb-2">System Modules</h2>
                <p className="text-zinc-400">Deployed as independent components or a complete ecosystem.</p>
             </div>
             <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                 <LayoutGrid size={14} /> MODULE_VIEW: EXPANDED
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_MODULES.map((module, idx) => (
              <div key={module.id} className="group bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-xl p-8 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <module.icon size={120} />
                </div>
                
                <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <module.icon className="text-zinc-300" size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600 border border-zinc-800/50 px-2 py-1 rounded bg-zinc-900">
                        M_0{idx + 1}
                    </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{module.title}</h3>
                <p className="text-zinc-400 text-sm mb-8 leading-relaxed relative z-10 h-10">{module.description}</p>
                
                <div className="bg-zinc-900/30 rounded-lg p-5 border border-zinc-800/50 relative z-10 backdrop-blur-sm">
                    <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider block mb-4">Core Deliverables</span>
                    <ul className="space-y-3">
                        {module.deliverables.map((item, i) => (
                            <li key={i} className="text-sm text-zinc-300 flex items-start gap-3">
                                <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="mt-6 pt-6 border-t border-zinc-900 flex items-center gap-2 relative z-10">
                    <Check className="text-emerald-500" size={14} />
                    <span className="text-xs text-emerald-500/90 font-mono tracking-tight">OUTCOME: {module.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof & Data - Reimagined as "Interface" */}
      <section id="proof" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-white mb-3">System Performance</h2>
                <p className="text-zinc-400 text-lg">
                    Real data from active client dashboards. <br/>
                    <span className="text-sm text-zinc-500">We track revenue, not views.</span>
                </p>
            </div>
            
            {/* Toggle Switch */}
            <div className="bg-zinc-900 p-1 rounded-lg border border-zinc-800 inline-flex">
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
            {/* Left: Description */}
            <div className="bg-zinc-900/20 border border-zinc-800 rounded-2xl p-8 flex flex-col">
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-semibold mb-6">
                        <Zap size={12} fill="currentColor" /> CASE STUDY {activeCaseStudy.id.replace('cs','0')}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">The Pivot</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                        {activeCaseStudy.description}
                    </p>
                </div>
                
                <div className="mt-auto space-y-4">
                     <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                        <div className="text-xs text-zinc-500 uppercase mb-1">Before System</div>
                        <div className="text-sm text-zinc-400">Unpredictable income, manual DMs, high burnout.</div>
                     </div>
                     <div className="flex justify-center">
                        <div className="h-6 w-0.5 bg-zinc-800"></div>
                     </div>
                     <div className="p-4 bg-emerald-950/20 border border-emerald-900/30 rounded-lg">
                        <div className="text-xs text-emerald-600 uppercase mb-1">After System</div>
                        <div className="text-sm text-emerald-100/70 font-medium">Automated qualification, daily sales calls, consistent revenue.</div>
                     </div>
                </div>
            </div>

            {/* Right: Dashboard Preview */}
            <div className="lg:col-span-2">
                <DashboardPreview data={activeCaseStudy} />
            </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section id="process" className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-white mb-2">Implementation Protocol</h2>
             <p className="text-zinc-400">From diagnosis to deployment in 4 phases.</p>
          </div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
            
            <div className="space-y-16">
                {PROCESS_STEPS.map((step, index) => (
                    <div key={step.id} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="md:w-1/2 pl-16 md:pl-0 md:px-16">
                           <div className={`bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-zinc-700 transition-colors group ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <span className="text-[10px] font-mono text-blue-500 mb-3 block tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">PHASE 0{step.id} — {step.phase}</span>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                           </div>
                        </div>
                        
                        {/* Dot */}
                        <div className="absolute left-6 md:left-1/2 w-10 h-10 rounded-full bg-zinc-950 border-4 border-zinc-800 flex items-center justify-center transform -translate-x-1/2 -translate-y-2 z-10 shadow-lg">
                            <span className="text-xs font-bold text-zinc-400 font-mono">{step.id}</span>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Engagement Models</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
                Transparent investment ranges for serious creators. 
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier) => (
                <div 
                    key={tier.name} 
                    className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                        tier.highlighted 
                        ? 'bg-zinc-900/80 border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.1)] scale-105 z-10' 
                        : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                    }`}
                >
                    {tier.highlighted && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                            Recommended
                        </div>
                    )}
                    
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-white mb-2">{tier.name}</h3>
                        <div className="text-2xl font-bold text-white font-mono mb-4">
                            {tier.priceRange}
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed">{tier.description}</p>
                    </div>

                    <div className="space-y-4 mb-8 flex-1">
                        <div className="h-px bg-zinc-800 w-full mb-6"></div>
                        {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 list-none">
                                <Check size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </div>

                    <button 
                        onClick={() => setIsApplyModalOpen(true)}
                        className={`w-full py-4 rounded-lg text-sm font-bold transition-all ${
                            tier.highlighted
                            ? 'bg-white text-black hover:bg-zinc-200 shadow-lg'
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
      <section className="py-24 border-t border-zinc-900 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
             <div className="w-24 h-24 bg-zinc-900 border border-zinc-800 rounded-full mx-auto mb-8 flex items-center justify-center text-3xl font-serif italic text-zinc-700 shadow-inner">
                F
             </div>
             <blockquote className="text-2xl md:text-3xl text-zinc-300 font-serif italic leading-relaxed mb-10">
                "Content without a system is just vanity. We built CSGA because we were tired of seeing brilliant creators broke, and mediocre creators rich because they understood funnels."
             </blockquote>
             <cite className="not-italic flex flex-col items-center gap-1">
                 <span className="text-white font-bold text-lg tracking-wide">The Founder</span>
                 <span className="text-zinc-500 text-sm font-mono uppercase tracking-wider">Systems Architect</span>
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
                <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
                <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
                <a href="#" className="hover:text-zinc-300 transition-colors flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> System Status
                </a>
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