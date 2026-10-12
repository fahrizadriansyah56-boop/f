import React, { useState } from 'react';
import { Page, GalleryItem } from '../../types';
import { GALLERY_CATEGORIES } from './galleryData';
import { GalleryCard } from './components/GalleryCard';
import { Camera, Upload } from 'lucide-react';

interface GalleryPageProps {
  items: GalleryItem[];
  onSelectItem: (item: GalleryItem) => void;
  onOpenSubmitModal: () => void;
  onNavigate: (page: Page) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  items,
  onSelectItem,
  onOpenSubmitModal,
}) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const filteredItems = selectedCat === 'all'
    ? items
    : items.filter((i) => i.category === selectedCat);

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header Section */}
      <section className="relative pt-8 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                Dokumentasi & Galeri
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Rekam Jejak Kebersamaan & Kreasi
              </h1>
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
                Kumpulan potret momen hangat kegiatan, lokakarya, dan pameran komunitas Damboris dari berbagai penjuru kota.
              </p>
            </div>

            <button
              onClick={onOpenSubmitModal}
              className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-xl text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 shadow-md shadow-amber-500/10 self-start sm:self-auto shrink-0 flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              <span>Bagikan Momen Kamu</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Filter Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4 p-3 bg-stone-900 border border-stone-800 rounded-2xl">
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCat === cat
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? `Semua Koleksi (${items.length})` : cat}
              </button>
            ))}
          </div>

          <span className="text-xs text-stone-500 font-mono hidden md:inline">
            Menampilkan {filteredItems.length} Momen
          </span>
        </div>
      </section>

      {/* 3. Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => onSelectItem(item)}
            />
          ))}
        </div>
      </section>

      {/* 4. Footer Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2.5">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>
              Punya foto dokumentasi meetup Damboris di kotamu yang ingin diarsipkan?
            </span>
          </div>
          <button
            onClick={onOpenSubmitModal}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-750 text-stone-200 rounded-lg font-medium transition-colors whitespace-nowrap"
          >
            Kirim Foto ke Arsip
          </button>
        </div>
      </section>
    </div>
  );
};
