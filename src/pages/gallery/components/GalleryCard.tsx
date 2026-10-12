import React from 'react';
import { GalleryItem } from '../../../types';
import { ImageWithFallback } from '../../../components/common/ImageWithFallback';
import { Calendar, MapPin, Eye } from 'lucide-react';

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-stone-900 border border-stone-800 hover:border-amber-400/40 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl shadow-black/40 flex flex-col justify-between"
    >
      {/* Image Box */}
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <ImageWithFallback
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-between p-4">
          <div className="flex justify-end">
            <span className="bg-stone-950/80 backdrop-blur-sm border border-stone-800 text-amber-400 text-[10px] font-semibold px-2.5 py-1 rounded-full">
              {item.category}
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[11px] text-stone-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                {item.date}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {item.location}
              </span>
            </div>

            <h3 className="text-sm font-bold text-white font-heading group-hover:text-amber-300 transition-colors line-clamp-2">
              {item.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Caption Strip */}
      <div className="p-4 bg-stone-950 border-t border-stone-850 flex items-center justify-between text-xs text-stone-400">
        <span className="line-clamp-1 text-[11px] text-stone-300">
          {item.description}
        </span>

        <div className="flex items-center gap-1 text-amber-400 text-[11px] font-semibold shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform">
          <Eye className="w-3.5 h-3.5" />
          <span>Lihat</span>
        </div>
      </div>
    </div>
  );
};
