import React from 'react';
import { ABOUT_VALUES } from '../aboutData';

export const ValuesSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
          Prinsip Kami
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Nilai yang Kami Hidupkan Bersama
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ABOUT_VALUES.map((val, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-3"
          >
            <div className="text-amber-400 font-mono text-sm font-bold">
              0{idx + 1}.
            </div>
            <h3 className="text-base font-bold text-white font-heading">
              {val.title}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {val.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
