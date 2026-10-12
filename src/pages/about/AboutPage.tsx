import React from 'react';
import { Page } from '../../types';
import { HistorySection } from './components/HistorySection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { ValuesSection } from './components/ValuesSection';
import { TeamSection } from './components/TeamSection';
import { ChaptersSection } from './components/ChaptersSection';
import { ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. Header Hero */}
      <section className="relative pt-8 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
              Tentang Komunitas Damboris
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Menghubungkan Potensi, Merawat Bara Kolaborasi
            </h1>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
              Mengenal lebih dekat ekosistem, nilai-nilai luhur, dan orang-orang di balik gerakan komunitas Damboris yang berdedikasi membangun ruang kreatif bersama.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Sejarah */}
      <HistorySection />

      {/* 3. Visi & Misi */}
      <VisionMissionSection />

      {/* 4. Nilai-Nilai Dasar */}
      <ValuesSection />

      {/* 5. Struktur Pengurus & Profil */}
      <TeamSection />

      {/* 6. Chapter Kota */}
      <ChaptersSection />

      {/* 7. Call To Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-stone-900 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Ingin Menjadi Bagian dari Cerita Ini?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400">
              Pendaftaran anggota Damboris selalu gratis dan terbuka untuk siapa saja.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-xl text-xs sm:text-sm transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Daftar Anggota Baru</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
