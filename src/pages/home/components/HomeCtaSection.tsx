import React from 'react';
import { Page } from '../../../types';

interface HomeCtaSectionProps {
  onNavigate: (page: Page) => void;
}

export const HomeCtaSection: React.FC<HomeCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-14 rounded-3xl bg-amber-400 text-stone-950 text-center space-y-6 relative overflow-hidden shadow-2xl">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-900/80">
            Pintu Terbuka Lebar Untukmu
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-stone-950 leading-tight">
            Siap Bertemu Rekan Kolaborasi Impianmu?
          </h2>
          <p className="text-sm sm:text-base font-medium text-stone-900/90 leading-relaxed">
            Bergabunglah bersama 100+ pemuda aktif lainnya. Dapatkan akses ke seluruh ruang diskusi, aksi sosial, dan jaringan komunitas Damboris hari ini.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-3.5 bg-stone-950 hover:bg-stone-900 text-amber-400 font-extrabold rounded-xl text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-stone-950/20"
          >
            Daftar Jadi Anggota Sekarang
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="w-full sm:w-auto px-8 py-3.5 bg-amber-500/30 hover:bg-amber-500/40 text-stone-950 border border-stone-950/20 font-bold rounded-xl text-sm transition-colors"
          >
            Kenali Kami Lebih Dekat
          </button>
        </div>
      </div>
    </section>
  );
};
