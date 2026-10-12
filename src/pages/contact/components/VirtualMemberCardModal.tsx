import React, { useState } from 'react';
import { VirtualMemberCard } from '../../../types';
import { X, QrCode, Check, Copy, Sparkles, Award } from 'lucide-react';

interface VirtualMemberCardModalProps {
  card: VirtualMemberCard | null;
  onClose: () => void;
}

export const VirtualMemberCardModal: React.FC<VirtualMemberCardModalProps> = ({
  card,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!card) return null;

  const handleCopy = async () => {
    const textToCopy = `ID Anggota Damboris: ${card.memberId} | Nama: ${card.fullName} | Komunitas: Damboris Indonesia`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch {
      // Fallback
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md bg-stone-900 border border-stone-800 rounded-3xl p-6 shadow-2xl relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-full bg-stone-950/80 hover:bg-stone-800 transition-colors z-10"
          aria-label="Tutup kartu"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 bg-amber-400/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-400/40">
            <Sparkles className="w-6 h-6 text-amber-400" />
          </div>
          <h3 className="text-xl font-extrabold text-white font-heading">
            Selamat Datang di Damboris!
          </h3>
          <p className="text-xs text-stone-400">
            Pendaftaranmu telah resmi diverifikasi. Berikut adalah Kartu Anggota Digital resmi kamu:
          </p>
        </div>

        {/* The Card */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 border-2 border-amber-500/50 rounded-2xl p-6 shadow-2xl shadow-amber-950/30 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-yellow-600/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top header */}
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-4 relative z-10">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold text-white font-heading tracking-wide">
                  DAMBORIS
                </span>
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
              <span className="text-[10px] text-amber-400/90 font-medium block">
                Official Community Member
              </span>
            </div>

            <div className="flex items-center gap-1 bg-amber-400/10 text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded text-[10px] font-semibold">
              <Award className="w-3 h-3" />
              <span>ACTIVE</span>
            </div>
          </div>

          {/* Member Info */}
          <div className="py-5 space-y-4 relative z-10">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-stone-500 block">
                Nama Anggota
              </span>
              <h4 className="text-lg font-bold text-white tracking-tight mt-0.5">
                {card.fullName}
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-[10px] text-stone-500 block">ID Keanggotaan</span>
                <span className="font-mono font-bold text-amber-400 text-sm">
                  {card.memberId}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-stone-500 block">Kota / Chapter</span>
                <span className="font-semibold text-stone-200">
                  {card.city}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-stone-500 block">Fokus Minat</span>
                <span className="font-semibold text-stone-300">
                  {card.primaryInterest}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-stone-500 block">Bergabung Sejak</span>
                <span className="font-semibold text-stone-300">
                  {card.joinedDate}
                </span>
              </div>
            </div>
          </div>

          {/* Card Footer with QR */}
          <div className="border-t border-stone-850 pt-4 flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <QrCode className="w-10 h-10 text-amber-400 p-1 bg-stone-900 border border-stone-800 rounded-lg" />
              <div className="text-[10px] text-stone-400">
                <span className="text-stone-300 font-medium block">Kolaborasi & Berkarya</span>
                <span>Koneksi Tanpa Batas</span>
              </div>
            </div>
            <span className="text-[9px] font-mono text-stone-600">SECURE PASS</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleCopy}
            className="w-full sm:flex-1 py-2.5 px-4 bg-stone-950 hover:bg-stone-850 text-stone-200 border border-stone-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Tersalin ke Clipboard' : 'Salin Nomor ID'}</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:flex-1 py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-xl text-xs font-bold transition-colors text-center"
          >
            Simpan & Mulai Jelajahi
          </button>
        </div>
      </div>
    </div>
  );
};
