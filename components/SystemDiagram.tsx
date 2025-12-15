import React from 'react';
import { Play, Filter, Mail, DollarSign, ArrowRight, Users } from 'lucide-react';

const SystemDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 relative">
      {/* Background Grid decorative */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none border border-zinc-800/50 rounded-xl" />

      {/* Connection Lines (Simulated with absolute divs for clean layout) */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -z-10 transform -translate-y-1/2 hidden md:block" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
        
        {/* Step 1: Content */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-zinc-500 transition-colors">
            <Play className="text-zinc-400 group-hover:text-white transition-colors" size={24} fill="currentColor" />
          </div>
          <span className="text-xs font-mono text-zinc-500 mb-1">SOURCE</span>
          <span className="text-sm font-semibold text-zinc-200">Content</span>
        </div>

        {/* Arrow Mobile */}
        <div className="md:hidden flex justify-center">
            <ArrowRight className="text-zinc-700 rotate-90" />
        </div>

        {/* Step 2: Funnel */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-blue-500/50 transition-colors">
            <Filter className="text-zinc-400 group-hover:text-blue-400 transition-colors" size={24} />
          </div>
          <span className="text-xs font-mono text-zinc-500 mb-1">FILTER</span>
          <span className="text-sm font-semibold text-zinc-200">Funnel</span>
        </div>

         {/* Arrow Mobile */}
         <div className="md:hidden flex justify-center">
            <ArrowRight className="text-zinc-700 rotate-90" />
        </div>

        {/* Step 3: Capture */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-zinc-500 transition-colors">
            <Mail className="text-zinc-400 group-hover:text-white transition-colors" size={24} />
          </div>
          <span className="text-xs font-mono text-zinc-500 mb-1">NURTURE</span>
          <span className="text-sm font-semibold text-zinc-200">System</span>
        </div>

         {/* Arrow Mobile */}
         <div className="md:hidden flex justify-center">
            <ArrowRight className="text-zinc-700 rotate-90" />
        </div>

        {/* Step 4: Sales Call */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-zinc-500 transition-colors">
            <Users className="text-zinc-400 group-hover:text-white transition-colors" size={24} />
          </div>
          <span className="text-xs font-mono text-zinc-500 mb-1">CONVERT</span>
          <span className="text-sm font-semibold text-zinc-200">Sales Call</span>
        </div>

         {/* Arrow Mobile */}
         <div className="md:hidden flex justify-center">
            <ArrowRight className="text-zinc-700 rotate-90" />
        </div>

        {/* Step 5: Revenue */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 rounded-xl bg-emerald-950/30 border border-emerald-900/50 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:border-emerald-500/50 transition-colors">
            <DollarSign className="text-emerald-500" size={24} />
          </div>
          <span className="text-xs font-mono text-emerald-700 mb-1">OUTCOME</span>
          <span className="text-sm font-semibold text-emerald-400">Revenue</span>
        </div>

      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-500 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          SYSTEM STATUS: ONLINE
        </div>
      </div>
    </div>
  );
};

export default SystemDiagram;
