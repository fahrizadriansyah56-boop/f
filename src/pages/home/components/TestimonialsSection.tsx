import React from 'react';
import { TESTIMONIALS } from '../homeData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
          Suara Anggota
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Apa Kata Mereka yang Tumbuh Bersama Damboris?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 flex flex-col justify-between space-y-4"
          >
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-3 border-t border-stone-850">
              <img
                src={t.avatar}
                alt={t.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border border-amber-400/30"
              />
              <div>
                <h4 className="text-xs font-bold text-white font-heading">{t.name}</h4>
                <p className="text-[11px] text-stone-400">{t.role}</p>
                <span className="text-[10px] text-amber-400 font-medium">{t.chapter}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
