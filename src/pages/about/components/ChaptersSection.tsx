import React from 'react';
import { COMMUNITY_CHAPTERS } from '../aboutData';
import { MapPin } from 'lucide-react';

export const ChaptersSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
          Jejaring Wilayah
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
          Titik Wilayah Damboris di Jawa Barat & Sekitarnya
        </h2>
        <p className="text-xs text-stone-400 max-w-xl">
          Di setiap wilayah, kami memiliki koordinator lapangan (korlap) daerah yang memfasilitasi temu tatap muka santai, diskusi, dan aksi nyata sosial.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {COMMUNITY_CHAPTERS.map((ch, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-white font-heading flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {ch.city}
              </span>
              <span className="text-[10px] text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded">
                {ch.activeStatus}
              </span>
            </div>
            <div className="text-xs text-stone-400">
              <span>Koordinator: </span>
              <span className="text-stone-200 font-medium">{ch.lead}</span>
            </div>
            <div className="text-xs text-stone-500 font-mono">
              {ch.membersCount} Anggota Terdaftar
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
