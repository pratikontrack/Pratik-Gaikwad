import React from 'react';
import { Play, Filter, Mail, DollarSign, Users, Database } from 'lucide-react';

const SystemDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 relative">
      {/* Background Grid decorative */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none rounded-xl border border-zinc-800/30" />

      {/* Desktop Connector Line */}
      <div className="absolute top-[88px] left-[10%] right-[10%] h-[2px] bg-zinc-800 hidden md:block overflow-hidden">
         <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
        
        {/* Step 1: Content */}
        <div className="flex flex-col items-center group relative">
          <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 shadow-xl z-10 group-hover:border-zinc-600 group-hover:-translate-y-1 transition-all duration-300">
            <Play className="text-zinc-500 group-hover:text-white transition-colors" size={28} fill="currentColor" />
          </div>
          <span className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-500 mb-2">SOURCE</span>
          <span className="text-sm font-semibold text-zinc-300">Content</span>
          
          {/* Mobile connector */}
          <div className="md:hidden absolute -bottom-6 left-1/2 w-0.5 h-6 bg-zinc-800"></div>
        </div>

        {/* Step 2: Funnel */}
        <div className="flex flex-col items-center group relative">
          <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 shadow-xl z-10 group-hover:border-blue-500/50 group-hover:shadow-blue-500/10 group-hover:-translate-y-1 transition-all duration-300">
            <Filter className="text-zinc-500 group-hover:text-blue-400 transition-colors" size={28} />
          </div>
          <span className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-500 mb-2">FILTER</span>
          <span className="text-sm font-semibold text-zinc-300">Funnel</span>
           {/* Mobile connector */}
           <div className="md:hidden absolute -bottom-6 left-1/2 w-0.5 h-6 bg-zinc-800"></div>
        </div>

        {/* Step 3: Capture */}
        <div className="flex flex-col items-center group relative">
          <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 shadow-xl z-10 group-hover:border-zinc-600 group-hover:-translate-y-1 transition-all duration-300">
            <Database className="text-zinc-500 group-hover:text-white transition-colors" size={28} />
          </div>
          <span className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-500 mb-2">NURTURE</span>
          <span className="text-sm font-semibold text-zinc-300">System</span>
           {/* Mobile connector */}
           <div className="md:hidden absolute -bottom-6 left-1/2 w-0.5 h-6 bg-zinc-800"></div>
        </div>

        {/* Step 4: Sales Call */}
        <div className="flex flex-col items-center group relative">
          <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 shadow-xl z-10 group-hover:border-zinc-600 group-hover:-translate-y-1 transition-all duration-300">
            <Users className="text-zinc-500 group-hover:text-white transition-colors" size={28} />
          </div>
          <span className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-500 mb-2">CONVERT</span>
          <span className="text-sm font-semibold text-zinc-300">Sales Call</span>
           {/* Mobile connector */}
           <div className="md:hidden absolute -bottom-6 left-1/2 w-0.5 h-6 bg-zinc-800"></div>
        </div>

        {/* Step 5: Revenue */}
        <div className="flex flex-col items-center group relative">
          <div className="w-20 h-20 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(16,185,129,0.1)] z-10 group-hover:border-emerald-500/50 group-hover:-translate-y-1 transition-all duration-300">
            <DollarSign className="text-emerald-600 group-hover:text-emerald-400 transition-colors" size={28} />
          </div>
          <span className="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-emerald-600/70 mb-2">OUTCOME</span>
          <span className="text-sm font-semibold text-emerald-400">Revenue</span>
        </div>

      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950/80 text-xs text-zinc-400 font-mono backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          SYSTEM STATUS: ONLINE
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default SystemDiagram;