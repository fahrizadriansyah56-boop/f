import React from 'react';
import { Page } from '../../../types';
import { HOME_PILLARS } from '../homeData';
import { ArrowRight } from 'lucide-react';

interface PillarsSectionProps {
  onNavigate: (page: Page) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
              Tentang Komunitas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
              SEJARAH AWAL BERDIRINYA KOMUNITAS DAMBORIS
            </h2>
          </div>

          <p className="text-sm text-stone-300 leading-relaxed">
            Damboris lahir dari sebuah gerakan tulus para pemuda yang memiliki satu visi yang sama: menghadirkan kebermanfaatan seluas-luasnya bagi sesama melalui aksi nyata di bidang sosial.
          </p>

          <p className="text-sm text-stone-300 leading-relaxed">
            Berawal dari diskusi hangat di lingkungan pesantren dengan semangat kepedulian terhadap dhuafa, anak yatim, dan masyarakat yang membutuhkan, Damboris kini berkembang menjadi wadah kolaborasi sosial yang terbuka. Kami percaya bahwa nilai-nilai kebaikan, keikhlasan, dan gotong royong yang ditempa di pesantren dapat disebarluaskan untuk merangkul lebih banyak kebaikan di masyarakat modern.

          <div className="pt-2">
            <button
              onClick={() => onNavigate('about')}
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-850 text-amber-400 border border-amber-400/30 rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-2"
            >
              <span>Pelajari Visi & Struktur Pengurus</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {HOME_PILLARS.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-amber-400/30 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-heading">
                  {pillar.title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
