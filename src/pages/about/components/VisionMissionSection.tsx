import React from 'react';
import { Target, Compass } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Visi Card */}
        <div className="p-8 rounded-3xl bg-stone-900/80 border border-amber-400/30 space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white font-heading">
            Visi Komunitas
          </h3>
          <p className="text-sm text-stone-300 leading-relaxed">
            Menjadi episentrum ekosistem kreatif dan teknologi yang paling ramah, berdaya saing, dan inklusif di Indonesia; melahirkan talenta mandiri yang mampu berkolaborasi melintasi batas geografis dan disiplin keilmuan.
          </p>
        </div>

        {/* Misi Card */}
        <div className="p-8 rounded-3xl bg-stone-900/80 border border-stone-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center text-amber-400">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white font-heading">
            Misi Komunitas
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
              <span>Menyelenggarakan ruang belajar, sharing wawasan, dan diskursus kreatif yang dapat diakses secara gratis oleh siapa saja.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
              <span>Memfasilitasi inisiatif proyek kolaborasi lintas disiplin antara bidang desain, programming, penulisan, dan bisnis.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
              <span>Membuka jejaring karir dan mentorship tulus antara praktisi industri berpengalaman dengan talenta pemula.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
