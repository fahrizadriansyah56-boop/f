import React, { useEffect } from 'react';
import { GalleryItem } from '../../../types';
import { ImageWithFallback } from '../../../components/common/ImageWithFallback';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Camera } from 'lucide-react';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handleNext = () => {
    if (items.length === 0) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const handlePrev = () => {
    if (items.length === 0) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items, onClose]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top action bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-2 text-xs text-stone-300">
          <span className="text-amber-400 font-medium">{item.category}</span>
          <span aria-hidden="true">·</span>
          <span>Foto {currentIndex + 1} dari {items.length}</span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
          aria-label="Tutup pratinjau foto"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors hidden sm:flex items-center justify-center z-10"
        aria-label="Foto sebelumnya"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors hidden sm:flex items-center justify-center z-10"
        aria-label="Foto selanjutnya"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main image container */}
      <div className="max-w-5xl w-full flex flex-col items-center justify-center space-y-4 max-h-[85vh]">
        <div className="relative max-h-[65vh] w-full flex items-center justify-center overflow-hidden rounded-xl border border-stone-800">
          <ImageWithFallback
            src={item.image}
            alt={item.title}
            className="max-h-[65vh] w-auto object-contain"
          />
        </div>

        {/* Caption & details */}
        <div className="w-full bg-stone-900/90 border border-stone-800 rounded-xl p-4 text-xs text-stone-300 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-white font-heading">{item.title}</h3>
            <div className="flex items-center gap-4 text-stone-400 text-[11px]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                {item.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {item.location}
              </span>
            </div>
          </div>
          <p className="text-stone-300 text-xs leading-relaxed">{item.description}</p>
          {item.photographer && (
            <div className="text-[11px] text-stone-400 flex items-center gap-1.5 pt-1 border-t border-stone-800">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Dokumentasi oleh: {item.photographer}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
