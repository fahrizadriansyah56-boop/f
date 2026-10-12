import React from 'react';
import { Page } from '../../../types';
import { GATHERING_IMAGE, WORKSHOP_IMAGE } from '../../../constants/images';
import { ImageWithFallback } from '../../../components/common/ImageWithFallback';

interface AtmosphereSectionProps {
  onNavigate: (page: Page) => void;
}

export const AtmosphereSection: React.FC<AtmosphereSectionProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
              Atmosfer Komunitas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
              Bukan Sekadar Hadir, Tapi Saling Menghidupkan Potensi
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Di Damboris, tidak ada hierarki kaku antara senior dan pemula. Kami menyatukan ruang temu yang hangat, diskusi tanpa canggung, serta pendampingan karir yang tulus.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('gallery')}
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white border border-stone-700 rounded-xl text-xs font-semibold transition-colors"
              >
                Jelajahi Galeri Kegiatan
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-xl text-xs font-bold transition-colors"
              >
                Kenali Tim & Pengurus
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl overflow-hidden border border-stone-800 h-44">
              <ImageWithFallback
                src={GATHERING_IMAGE}
                alt="Kopdar komunitas santai"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-stone-800 h-44">
              <ImageWithFallback
                src={WORKSHOP_IMAGE}
                alt="Workshop interaktif Damboris"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
