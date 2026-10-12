import React from 'react';
import { TEAM_IMAGE } from '../../../constants/images';
import { ImageWithFallback } from '../../../components/common/ImageWithFallback';

export const HistorySection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
            Perjalanan Kami
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
            Dari Satu Meja Kopi Menjadi Gerakan Lintas Kota
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Damboris didirikan pada awal tahun 2021. Di tengah situasi pasca-pandemi ketika isolasi digital merenggut ruang tatap muka, sekelompok perancang grafis, software developer, dan kreator konten berkumpul di sebuah kedai kopi di bilangan Jakarta Selatan.
            </p>
            <p>
              Kami menyadari satu kebutuhan mendasar: talenta muda membutuhkan komunitas yang tidak transaksional. Bukan tempat pamer penghargaan, melainkan tempat saling mengulurkan tangan, memberikan kritik membangun, dan menggarap proyek eksperimental tanpa rasa takut dihakimi.
            </p>
            <p>
              Dari perkumpulan awal, Damboris kini telah berkembang menjadi gerakan pemuda dengan lebih dari 100+ anggota aktif yang tersebar di 6 titik wilayah Jawa Barat dan sekitarnya.
            </p>
          </div>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-stone-850 pt-5">
            <div>
              <span className="text-xl sm:text-2xl font-bold font-mono text-amber-400">2021</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">Tahun Berdiri</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold font-mono text-amber-400">6</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">Titik Wilayah</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold font-mono text-amber-400">100%</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">Nirlaba & Terbuka</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-stone-800 shadow-xl relative aspect-[4/3]">
            <ImageWithFallback
              src={TEAM_IMAGE}
              alt="Pertemuan tim inisiator Damboris"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-xs text-stone-300">
                Sesi perumusan roadmap & cetak biru komunitas bersama pengurus lintas chapter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
