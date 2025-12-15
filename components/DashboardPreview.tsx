import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Activity, Users, Calendar, DollarSign, Bell } from 'lucide-react';
import { CaseStudy } from '../types';

interface DashboardPreviewProps {
  data: CaseStudy;
}

const DashboardPreview: React.FC<DashboardPreviewProps> = ({ data }) => {
  return (
    <div className="w-full bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden shadow-2xl flex flex-col">
      {/* App Header */}
      <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center gap-4">
        <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
        <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-black/50 rounded-md text-[10px] font-mono text-zinc-500 border border-zinc-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                CSGA_SYSTEMS // {data.clientType.toUpperCase().replace(' ', '_')}_DASHBOARD
            </div>
        </div>
        <div className="flex items-center gap-3">
            <Bell size={14} className="text-zinc-500" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
        </div>
      </div>

      <div className="flex flex-1 min-h-[400px]">
        {/* Sidebar */}
        <div className="w-14 bg-zinc-900/50 border-r border-zinc-800 flex flex-col items-center py-6 gap-6 hidden sm:flex">
             <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg"><Activity size={18} /></div>
             <div className="p-2 text-zinc-600 hover:text-zinc-400 transition-colors"><Users size={18} /></div>
             <div className="p-2 text-zinc-600 hover:text-zinc-400 transition-colors"><Calendar size={18} /></div>
             <div className="p-2 text-zinc-600 hover:text-zinc-400 transition-colors"><DollarSign size={18} /></div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-6 bg-zinc-950 flex flex-col">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h2 className="text-white text-lg font-semibold">Performance Overview</h2>
                    <p className="text-xs text-zinc-500">Real-time system analytics</p>
                </div>
                <div className="text-right hidden md:block">
                     <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">SYSTEM HEALTH: 98%</span>
                </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
                {data.stats.map((stat, idx) => (
                    <div key={idx} className="p-3 md:p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] md:text-xs font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</span>
                        </div>
                        <div className="text-lg md:text-2xl font-mono text-white font-bold">{stat.value}</div>
                        <div className={`text-[10px] md:text-xs mt-1 flex items-center gap-1 ${stat.trendUp ? 'text-emerald-500' : 'text-zinc-500'}`}>
                            {stat.trendUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                            {stat.trend}
                        </div>
                    </div>
                ))}
            </div>

            {/* Chart */}
            <div className="flex-1 bg-zinc-900/20 border border-zinc-800/50 rounded-lg p-4 relative min-h-[200px]">
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="flex items-center gap-1 text-[10px] text-zinc-500">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        {data.metric}
                    </div>
                 </div>
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data.chartData}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                        <XAxis dataKey="month" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                        <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                            itemStyle={{ color: '#60a5fa' }}
                            cursor={{ stroke: '#3f3f46', strokeWidth: 1 }}
                        />
                        <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;