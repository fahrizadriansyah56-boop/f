import React from 'react';
import { COMMUNITY_STATS } from '../homeData';

export const StatsSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {COMMUNITY_STATS.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-stone-900/70 border border-stone-800 hover:border-amber-400/40 transition-colors"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading font-mono tabular-nums text-amber-400">
              {stat.value}
            </div>
            <div className="text-sm font-bold text-white mt-2 font-heading">
              {stat.label}
            </div>
            <div className="text-xs text-stone-400 mt-1">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
