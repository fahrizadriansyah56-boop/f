import React, { useState } from 'react';
import { FAQ_ITEMS } from '../contactData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>Tanya Jawab Populer</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Pertanyaan yang Sering Diajukan
        </h2>
      </div>

      <div className="space-y-3">
        {FAQ_ITEMS.map((faq, index) => {
          const isOpen = openFaqIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-stone-900 border border-stone-800 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-sm font-semibold text-white">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-stone-850 text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
