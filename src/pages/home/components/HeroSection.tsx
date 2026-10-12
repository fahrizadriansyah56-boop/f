import React from 'react';
import { Page } from '../../../types';
import { HERO_CONTENT } from '../homeData';
import { HERO_IMAGE } from '../../../constants/images';
import { ImageWithFallback } from '../../../components/common/ImageWithFallback';
import { ArrowRight, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-8 sm:pt-14 overflow-hidden">
      {/* Background ambient gold warmth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Tagline kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{HERO_CONTENT.kicker}</span>
          </div>

          {/* Slogan & Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.12]">
            {HERO_CONTENT.headlineStart}
            <span className="gold-gradient-text">{HERO_CONTENT.headlineAccent}</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto font-normal">
            {HERO_CONTENT.description}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-xl text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <span>Gabung Komunitas (Gratis)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('gallery')}
              className="w-full sm:w-auto px-7 py-3.5 bg-stone-900 hover:bg-stone-850 text-stone-200 border border-stone-800 hover:border-stone-700 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Jelajahi Galeri Dokumentasi</span>
            </button>
          </div>

          {/* Trust markers */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
            {HERO_CONTENT.trustBadges.map((badge, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Hero Visual Image Banner - Preserve Original Photo */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl relative group bg-stone-900">
          <div className="w-full relative flex items-center justify-center">
            <ImageWithFallback
              src={HERO_IMAGE}
              alt="Gathering Akbar Komunitas Damboris - Day in Dey Ciwidey"
              className="w-full h-auto object-contain block"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent flex items-end p-5 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                  Gathering Akbar Damboris
                </span>
                <p className="text-white text-base sm:text-lg font-bold font-heading">
                  Day in Dey: GATHERING AKBAR DI CIWIDEY
                </p>
              </div>
              <button
                onClick={() => onNavigate('gallery')}
                className="px-4 py-2 bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700 rounded-lg text-xs font-medium transition-colors backdrop-blur-sm self-start sm:self-auto flex items-center gap-1.5"
              >
                <span>Buka Galeri Dokumentasi</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
