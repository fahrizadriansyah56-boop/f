import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Dokumentasi Damboris',
  fallbackTitle,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-stone-900 border border-stone-800 flex flex-col items-center justify-center text-center p-6 text-stone-400 ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="w-8 h-8 text-amber-500/70 mb-2 stroke-[1.5]" />
        <span className="text-xs font-medium text-stone-300 line-clamp-2">
          {fallbackTitle || alt || 'Dokumentasi Damboris'}
        </span>
        <span className="text-[10px] text-stone-500 mt-1">Komunitas Damboris</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-stone-900 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-stone-900 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
